<template>
  <footer class="footer">
    <h3>我是全局尾部组件</h3>
  </footer>
</template>
<script>
export default {
  name: 'cc-footer',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin';
.footer {
  @include wh(100%,78px);
}
</style>
