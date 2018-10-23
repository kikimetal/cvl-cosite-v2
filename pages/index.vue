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

      <section class="to-service">
        <img class="bg" src="~/assets/img/home/DMF.svg" alt="株式会社カーバンクルの企業様向けサービス紹介へのリンク" />
        <router-link to="/service" class="file" data-scroll v-parallax="0.1">
          <img src="~/assets/img/home/to-service.svg" alt="デザイン責任者がおらず、ブランドづくりやサービス開発にお困りの企業様の右腕になります" />
        </router-link>
      </section>

      <section class="to-for-learner">
        <img class="bg" src="~/assets/img/home/girl.svg" alt="株式会社カーバンクルの学生様向けサービス紹介へのリンク" />
        <router-link to="/u25" class="file" data-scroll v-parallax="0.1">
          <img src="~/assets/img/home/to-for-learner.svg" alt="将来に悩み、成長のための環境を探している方に伝えたいことがあります。" />
        </router-link>
      </section>

      <section>
        <img class="figure" src="~/assets/img/home/magazine.svg" alt="株式会社カーバンクルの仕事のプロセスや実績紹介のリンク" data-scroll v-parallax="0.1" />
        <router-link to="/works" class="link-to" data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/magazine-btn.svg" alt="magazine プロジェクトの中身について" />
        </router-link>
      </section>

      <section>
        <img class="figure" src="~/assets/img/home/works.svg" alt="株式会社カーバンクルの仕事のプロセスや実績紹介のリンク" data-scroll v-parallax="0.1" />
        <router-link to="/works" class="link-to" data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/works-btn.svg" alt="works デザインについて" />
        </router-link>
      </section>

      <section>
        <img class="figure" src="~/assets/img/home/event.svg" alt="株式会社カーバンクルが主催するイベント情報" data-scroll v-parallax="0.1" />
        <router-link to="/event" class="link-to" data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/event-btn.svg" alt="event 学びに行く" />
        </router-link>
      </section>

      <section>
        <img class="figure" src="~/assets/img/home/company.svg" alt="株式会社カーバンクルの企業情報です" data-scroll v-parallax="0.1" />
        <router-link to="/company" class="link-to" data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/company-btn.svg" alt="company 会社の説明" />
        </router-link>
      </section>

      <section>
        <img class="figure" src="~/assets/img/home/contact.svg" alt="株式会社カーバンクルへのお問い合わせはこちら" data-scroll v-parallax="0.1" />
        <router-link to="/contact" class="link-to" data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/contact-btn.svg" alt="contact お問い合わせ" />
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
    @include section-simple;
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
      // border-radius: $height 0 0 $height;
      border-radius: $height;
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

  // section:nth-of-type(2){
  section.to-service{
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
      width: 92%;
      padding-bottom: 30%;
    }
  }

  // section:nth-of-type(3){
  section.to-for-learner{
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
      width: 92%;
      padding-top: 60%;
    }
  }

  // magazine
  section:nth-of-type(4){
    background: #BCF0FF;
    .figure{
      width: 74%;
    }
  }

  section:nth-of-type(5){
    background: $grey-5;
    .figure{
      width: 50%;
    }
  }

  section:nth-of-type(6){
    background: $pink;
    .figure{
      width: 55%;
    }
  }

  section:nth-of-type(7){
    background: $violet-dark;
    .figure{
      width: 53%;
    }
  }

  section:nth-of-type(8){
    background: #9DFECA;
    .figure{
      width: 66%;
    }
  }

}

</style>
