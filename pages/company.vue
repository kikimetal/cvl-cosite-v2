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

.heading{
  &.top{ padding-top: 5.5em; }
  width: 84%;
  margin: 0 auto;
  color: $black;
  font-weight: 900;
  font-size: 32px;
  @include md{
    font-size: 40px;
  };
  letter-spacing: 0.1em;
  line-height: 1.3;
  text-align: center;
  border-bottom: 13px solid;
}

</style>
