<template lang="html">
  <div class="page">
    <div id="contact">
      <h1>Contact Us</h1>
      <p>気軽にお話ししましょう！</p>
      <img src="~/assets/img/nav/usa-pink.svg" alt="カーバンクルうさぎさんの画像">
      <a class="typeform-share button" href="https://carvancl1.typeform.com/to/WdphoQ" data-mode="popup">
        こちらからどうぞ！
      </a>
      <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
    </div>
    <Footer />
  </div>
</template>
お持ちの場合のみ

<script>
import ComingSoon from '~/components/ComingSoon.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    ComingSoon,
    Footer
  },
  mounted() {
    this.$store.state.so()
  },
  head() {
    return this.$store.state.getHead()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.page {
  background: pale($pink);
}
#contact {
  background: $white;
  color: $grey-5;
  min-height: 90vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3.3em;
    font-weight: 900;
    line-height: 1.6;
    color: $pink;
  }
  p {
    line-height: 2;
    font-size: 1em;
    font-weight: 600;
  }
  img {
    padding: 1.4em 0 2em;
    width: 60px;
    opacity: 0.5;
  }
}
.typeform-share.button {
  text-align: center;
  margin: 1em 0;
  padding: 0.8em 0;
  width: 13em;
  line-height: 1;
  background-color: $pink;
  color: $white;
  border-radius: 3em;
  font-weight: 600;
  font-size: 1.15em;
  box-shadow: 0 2px 16px 0 rgba($pink, 0.4);
}
</style>
