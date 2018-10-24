<template>
  <div id="default">
    <div id="bg">
      <img class="co-name" src="~/assets/img/home/co-name.svg" alt="株式会社カーバンクルのロゴマーク">
    </div>
    <Nav/>
    <nuxt/>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default{
  components: {
    Nav,
  },
  created () {
    window.addEventListener('scroll', () => {
      this.$store.commit('setIsScrollTop')
    })

    ;(function(d) {
      var config = {
        kitId: 'ryo8wsk',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document)
  }
}
</script>

<style lang="scss">
@import '~/assets/css/myset.scss';

#default{
  overflow: hidden;
  .page > div{ // e.g. #home
    overflow: hidden;
  }
}

#bg{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 900;
  // background: $pink;
  // background: linear-gradient(145deg, $pink, $blue);
  background: linear-gradient(155deg, $blue, $pink);
  z-index: -9999;
  // span{
  //   color: $pink;//非対応のブラウザでの文字色を設定
  //   background: -webkit-linear-gradient(12deg, $pink, $blue);//背景色にグラデーションを指定
  //   -webkit-background-clip: text;//テキストでくり抜く
  //   -webkit-text-fill-color: transparent;//くり抜いた部分は背景を表示
  //   line-height: 3;
  // }
  img{
    // mix-blend-mode: soft-light;
    opacity: 0.5;
  }
}
</style>
