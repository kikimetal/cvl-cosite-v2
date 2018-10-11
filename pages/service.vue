<template lang="html">
  <div class="page">
    <div id="service">
      <h1>u-25</h1>
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
</style>
