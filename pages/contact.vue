<template lang="html">
  <div class="page">
    <div id="contact">
      <h1>contact</h1>
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
