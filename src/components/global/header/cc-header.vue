<template>
  <header class="header">
    我是全局头部组件
  </header>
</template>
<script>
export default {
  name: 'cc-header',
  data () {
    return {
      select: null
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin';
.header {
  @include wh(100%, 50px);
}
</style>
