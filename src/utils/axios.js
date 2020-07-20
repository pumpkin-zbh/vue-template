import axios from 'axios'
import router from '@/router'
// import { Message } from 'element-ui' // 注意依赖 ！！
const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 6 * 1000 // 设置超时时间
})
// post请求的时候，需要加上一个请求头，进行一个默认的设置
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

/**
 * 请求失败后的错误统一处理，当然还有更多状态码判断，根据自己业务需求去扩展即可
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, response) => {
  let message
  switch (status) {
    case 400:
      message = '请求错误'
      break
    case 401:
      message = '未授权，请登录'
      router.replace({ path: '/login', query: { redirect: router.currentRoute.fullPath } })
      break
    case 403:
      message = '登陆信息失效，拒绝访问'
      // 清除token // localStorage.removeItem('token')
      router.replace({ path: '/login', query: { redirect: router.currentRoute.fullPath } })
      break
    case 404:
      message = `请求地址出错: ${process.env.BASE_URL + response.config.url}`
      break
    case 408:
      message = '请求超时'
      break
    case 500:
      message = '服务器内部错误'
      break
    case 501:
      message = '服务未实现'
      break
    case 502:
      message = '网关错误'
      break
    case 503:
      message = '服务不可用'
      break
    case 504:
      message = '网关超时'
      break
    case 505:
      message = 'HTTP版本不受支持'
      break
    default:
      message = '请求错误：' + response.data.message
  }
  return message
}
/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
service.interceptors.request.use(config => {
  // const token = localStorage.getItem('token')
  // if (token) {
  //   config.headers['Authorization'] = token
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})
/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(response => {
  const responseCode = response.status
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
  // 否则的话抛出错误
  if (responseCode === 200) {
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response)
  }
}, error => {
  // // 断网 或者 请求超时 状态
  if (!error.response) {
    if (error.message.includes('timeout')) {
      // Message.error('请求超时，请检查网络是否连接正常')
    } else {
      // Message.error('请求失败，请检查网络是否已连接')
    }
    return Promise.reject(error)
  }
  var msg = errorHandle(error.response.status, error.response)
  // 此处会输出所有报错情况， 接口不需要再二次打印报错信息
  console.log(msg)
  // Message.error(msg)
  return Promise.reject(error.response)
})

export default service
