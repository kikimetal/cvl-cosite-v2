<template lang="html">
  <div class="page">
    <div id="contact">
      <h1>company</h1>
      <h1>company</h1>
      <h1>company</h1>
      <h1>company</h1>
      <h1>company</h1>
    </div>
  </div>
</template>

<script>
export default {
  mounted () { this.$store.state.so() },
  head () { return this.$store.state.getHead() },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.page{
  background: pale($violet-dark);
}
</style>
