<template lang="html">
  <footer class="footer">
    <router-link to="/" class="logo">
      <img class="co-name" src="~/assets/img/home/co-name.svg" alt="株式会社カーバンクルのロゴマーク">
    </router-link>
    <span>2018 CARVANCL inc all right reserved.</span>
    <span>&nbsp;/&nbsp;</span><router-link to="/privacy-policy">Privacy policy</router-link>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.footer{
  padding: 2.5rem 1.5rem 3.5rem;
  background: $black;
  color: $white;
  font-size: 0.9rem;
  line-height: 1.4;
  *{
    opacity: 0.5;
    display: inline-block;
  }
  a{
    text-decoration: underline;
  }
  .logo{
    display: block;
    width: 30%;
    padding-bottom: 0.5rem;
    opacity: 0.2;
  }
}
</style>
