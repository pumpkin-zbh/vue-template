import request from '@/utils/axios'
// 文件上传

const global = {
  uploadFile (formData) {
    const res = request({
      method: 'post',
      url: '/upload',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return res
  },
  getBannerApi (params) {
    return request({
      url: '/web/index.php',
      method: 'get',
      params
    })
  }
}
export default global
