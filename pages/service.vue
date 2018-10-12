<template lang="html">
  <div class="page">
    <div id="service">

      <section>
        <h1 class="heading top">白紙からのデザインワーク</h1>
        <div class="figure">
          <img data-scroll v-parallax="0.2" src="~/assets/img/service/line.svg" alt="">
          <img data-scroll v-parallax="0.1" src="~/assets/img/service/line.svg" alt="">
          <img data-scroll v-parallax="0" src="~/assets/img/service/line.svg" alt="">
        </div>
        <p>CARVANCLは、既に誰でもできる形で方法が確立されたデザインワークを、大衆に向けて行う会社ではありません。</p>
      </section>

      <section>
        <h1 class="heading">目指すのはブランドづくり</h1>
        <div class="figure">
          <img src="~/assets/img/service/line.svg" alt="">
        </div>
        <p>CARVANCLは、既に誰でもできる形で方法が確立されたデザインワークを、大衆に向けて行う会社ではありません。</p>
      </section>

      <section>
        <h1 class="heading">目指すのはブランドづくり</h1>
        <div class="figure">
          <img src="~/assets/img/service/line.svg" alt="">
        </div>
        <p>CARVANCLは、既に誰でもできる形で方法が確立されたデザインワークを、大衆に向けて行う会社ではありません。</p>
      </section>

      <section>
        <h1 class="heading">目指すのはブランドづくり</h1>
        <div class="figure">
          <img src="~/assets/img/service/line.svg" alt="">
        </div>
        <p>CARVANCLは、既に誰でもできる形で方法が確立されたデザインワークを、大衆に向けて行う会社ではありません。</p>
      </section>

    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
export default {
  components: {
    Footer,
  },
  mounted () { this.$store.state.so() },
  head () { return this.$store.state.getHead() },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.page{
  background: pale($grey-3);
}
#service{
  background: $grey-3;

  section{
    .heading{
      padding: 4.2em 0.2em 0.6em;
      &.top{ padding-top: 5.5em; }
      width: 84%;
      margin: 0 auto;
      color: $black;
      font-size: 40px;
      font-weight: 900;
      letter-spacing: 0.1em;
      line-height: 1.3;
      text-align: center;
      border-bottom: 13px solid;
    }

    .figure{
      position: relative;
      padding: 8em 1em 6.5em;
      margin: 0 auto;
      width: 90%;
      img:nth-of-type(1){
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
      img:nth-of-type(2){
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
      img:nth-of-type(3){
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }

    p{
      padding: 0.5em 2em;
      font-size: 1.1rem;
      line-height: 2;
    }
  }

  section:nth-of-type(1){}

}
</style>
