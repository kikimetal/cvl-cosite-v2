<template lang="html">
  <div id="nav">
    <nav>
      <span class="logo">
        carvancl
      </span>
      <span class="context">
        - - - - -
      </span>
      <span class="right-item">
        <span class="contact">[mail]</span>
        <span class="bars">=</span>
      </span>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
#nav{
  nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 10px;
    height: 32px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background: $skyblue;
    z-index: 999999;

    font-family: sans-serif;
    @include futura;
    color: $white;

    .logo{
      @include futura;
    }
  }
}
</style>
