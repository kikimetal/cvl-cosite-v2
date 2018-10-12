<template>
  <div class="page">
    <div id="home">

      <section>
        <img v-parallax="0.2" class="here" src="~/assets/img/home/here.png" alt="" />
        <img class="co-name" src="~/assets/img/home/co-name.svg" alt="株式会社カーバンクルのロゴマーク">
        <div class="under-bar" />
        <p class="heading">答えを作るデザインプロジェクト推進企業</p>
        <p v-parallax="-0.05" class="more">More!</p>
        <img v-parallax="-0.1" class="arrow-bottom" src="~/assets/img/home/arrow-bottom.svg" alt="" />
      </section>

      <section>
        <img class="bg" src="~/assets/img/home/DMF.svg" alt="" />
        <router-link to="/service"
        class="file"
        data-scroll v-parallax="0.1">
          <img src="~/assets/img/home/file.png" alt="" />
        </router-link>
      </section>

      <section>
        <img class="bg" src="~/assets/img/home/girl.svg" alt="" />
        <router-link to="/u25"
        class="file"
        data-scroll v-parallax="0.1">
          <img src="~/assets/img/home/file.png" alt="" />
        </router-link>
      </section>

      <section>
        <img
        data-scroll v-parallax="0.1"
        class="figure" src="~/assets/img/home/phone.svg" alt="" />
        <router-link to="/works"
        class="look-btn"
        data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/look-btn.svg" alt="" />
        </router-link>
      </section>

      <section>
        <img
        data-scroll v-parallax="0.1"
        class="figure" src="~/assets/img/home/cal.svg" alt="" />
        <router-link to="/event"
        class="look-btn"
        data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/look-btn.svg" alt="" />
        </router-link>
      </section>

      <section>
        <img
        data-scroll v-parallax="0.1"
        class="figure" src="~/assets/img/home/hotel.svg" alt="" />
        <router-link to="/company"
        class="look-btn"
        data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/look-btn.svg" alt="" />
        </router-link>
      </section>

      <section>
        <img
        data-scroll v-parallax="0.1"
        class="figure" src="~/assets/img/home/magazine.svg" alt="" />
        <router-link to="/magazine"
        class="look-btn"
        data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/look-btn.svg" alt="" />
        </router-link>
      </section>

      <section>
        <img
        data-scroll v-parallax="0.1"
        class="figure" src="~/assets/img/home/contact.svg" alt="" />
        <router-link to="/contact"
        class="look-btn"
        data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/look-btn.svg" alt="" />
        </router-link>
      </section>

    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'

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
  background: pale($blue);
}
#home{
  section{
    position: relative;
    width: 100%;
    height: 190vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    color: $white;
    @include md {
      height: 58vw;
    }
    @include lg {
      height: 52vw;
    }
  }

  section:nth-of-type(1){
    background: $blue;

    img.here{
      padding-top: 7%;
      width: 96%;
      margin-left: auto;
      opacity: 0.5;
    }
    img.co-name{
      padding: 9% 0 2%;
      width: 90%;
      z-index: 1;
    }
    .under-bar{
      width: 86%;
      $height: 8px;
      height: $height;
      background: $white;
      border-radius: $height 0 0 $height;
      opacity: 0.2;
    }
    .heading{
      padding-top: 5%;
      padding-bottom: 15%;
      font-size: 0.95rem;
      font-weight: 300;
    }
    .more{
      padding-bottom: 10%;
      font-size: 1.1rem;
      font-weight: 900;
      opacity: 0.6;
    }
    img.arrow-bottom{
      width: 0.75rem;
      opacity: 0.3;
    }
  }

  section:nth-of-type(2){
    background: $red;
    overflow: hidden;
    .bg{
      position: absolute;
      width: auto;
      height: 100%;
      transform: scale(1.1);
      opacity: 0.4;
      z-index: 1;
    }
    .file{
      z-index: 2;
      width: 96%;
      margin-left: auto;
      padding-bottom: 30%;
    }
  }

  section:nth-of-type(3){
    background: $grey-1;
    overflow: hidden;
    .bg{
      position: absolute;
      top: -3px;
      width: auto;
      height: 70%;
      z-index: 1;
    }
    .file{
      z-index: 2;
      width: 96%;
      margin-left: auto;
      padding-top: 60%;
    }
  }

  section{
    .look-btn{
      padding-top: 10%;
      padding-left: 10%;
      margin-right: auto;
      width: 65%;
    }
  }

  section:nth-of-type(4){
    background: $grey-5;
    .figure{
      width: 50%;
    }
  }

  section:nth-of-type(5){
    background: $pink;
    .figure{
      width: 55%;
    }
  }

  section:nth-of-type(6){
    background: $violet-dark;
    .figure{
      width: 53%;
    }
  }

  section:nth-of-type(7){
    background: $violet-dark;
    .figure{
      width: 71%;
    }
  }

  section:nth-of-type(8){
    background: $violet-dark;
    .figure{
      width: 66%;
    }
  }

}

</style>
