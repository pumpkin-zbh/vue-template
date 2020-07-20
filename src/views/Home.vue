<template>
  <div class="home" style="transform: translateX(-5px);">
    <cc-header />
    <img alt="Vue logo" src="../assets/logo.png" class="logon">
    <div class="my-name">这是我的名字</div>
  </div>
</template>

<script>
import testMixin from '@/mixins/test-mixin'
export default {
  name: 'Home',
  mixins: [testMixin],
  data () {
    return {}
  },
  async created () {
    await this.NEWS_LIST([2, 3, 4])
    console.log(this.getNewsResponse)
    var param = {
      _mall_id: 4,
      r: 'api/official/banners',
      page: 1,
      limit: 20
    }
    var [err, data] = await this.$awaitWrap(this.$api.global.getBannerApi(param))
    console.log(data, 'data')
    console.log(err, 'err')
  }
}
</script>
<style lang='scss' scoped>
.my-name{
  background: $base-color;
  @include sc(14px, #fff);
  @include fj();
  transform: translateX(-5px);
}
.logon {
  width: 1rem;
  height: 1rem;
}
</style>
