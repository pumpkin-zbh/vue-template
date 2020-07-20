export default {
  install (Vue) {
    Vue.prototype.$awaitWrap = function (promise) {
      return promise
        .then(data => [null, data])
        .catch(err => [err, null])
    }
  }
}
