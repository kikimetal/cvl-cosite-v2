<template>
  <div class="page">
    <div id="home">

      <section>
        <!-- <img class="here" v-parallax="0.2" src="~/assets/img/home/here.png" alt="" /> -->
        <img class="here" src="~/assets/img/home/here.png" alt="" />
        <img class="co-name" src="~/assets/img/home/co-name.svg" alt="株式会社カーバンクルのロゴマーク" v-parallax="0.1">
        <!-- <div class="under-bar" v-parallax="0.1"/> -->
        <p class="heading" v-parallax="0.1">答えを作るデザインプロジェクト推進企業</p>
        <p class="more" v-parallax="0.1">More!</p>
        <img class="arrow-bottom" src="~/assets/img/home/arrow-bottom.svg" alt="" v-parallax="0.1" />
      </section>

      <section class="to-service">
        <img class="bg" src="~/assets/img/home/DMF.svg" alt="株式会社カーバンクルの企業様向けサービス紹介へのリンク" />
        <router-link to="/service" class="link-card" data-scroll v-parallax="0.1">
          <img src="~/assets/img/home/to-service.svg" alt="デザイン責任者がおらず、ブランドづくりやサービス開発にお困りの企業様の右腕になります" />
        </router-link>
      </section>

      <section class="to-for-learner">
        <img class="bg" src="~/assets/img/home/girl.svg" alt="株式会社カーバンクルの学生様向けサービス紹介へのリンク" />
        <router-link to="/learner" class="link-card" data-scroll v-parallax="0.1">
          <img src="~/assets/img/home/to-for-learner.svg" alt="将来に悩み、成長のための環境を探している方に伝えたいことがあります。" />
        </router-link>
      </section>

      <section class="magazine">
        <img class="figure" src="~/assets/img/home/magazine.svg" alt="株式会社カーバンクルの仕事のプロセスや実績紹介のリンク" data-scroll v-parallax="0.1" />
        <router-link to="/works" class="link-to" data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/magazine-btn.svg" alt="magazine プロジェクトの中身について" />
        </router-link>
      </section>

      <section class="works">
        <img class="figure" src="~/assets/img/home/works.svg" alt="株式会社カーバンクルの仕事のプロセスや実績紹介のリンク" data-scroll v-parallax="0.1" />
        <router-link to="/works" class="link-to" data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/works-btn.svg" alt="works デザインについて" />
        </router-link>
      </section>

      <section class="event">
        <img class="figure" src="~/assets/img/home/event.svg" alt="株式会社カーバンクルが主催するイベント情報" data-scroll v-parallax="0.1" />
        <router-link to="/event" class="link-to" data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/event-btn.svg" alt="event 学びに行く" />
        </router-link>
      </section>

      <section class="company">
        <img class="figure" src="~/assets/img/home/company.svg" alt="株式会社カーバンクルの企業情報です" data-scroll v-parallax="0.1" />
        <router-link to="/company" class="link-to" data-scroll v-parallax="-0.1">
          <img src="~/assets/img/home/company-btn.svg" alt="company 会社の説明" />
        </router-link>
      </section>

      <section class="contact">
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
    @include fullpage;
  }

  section:nth-of-type(1){
    background: $blue;

    img.here{
      padding-top: 7%;
      width: 96%;
      margin-left: auto;
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

    @include md{
      padding-right: 50vw;
      img.here{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 60%;
      }
      .heading{
        font-size: 1.3rem;
      }
      .more{
        padding-top: 10%;
        padding-bottom: 5%;
      }
    }
  }

  // no.2
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
    .link-card{
      z-index: 2;
      width: 92%;
      padding-bottom: 30%;
    }
    @include md{
      .link-card{
        width: 40%;
        padding: 0;
        margin-left: auto;
        margin-right: 3.3%;
      }
    }
  }

  // no.3
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
    .link-card{
      z-index: 2;
      width: 92%;
      padding-top: 60%;
    }
    @include md{
      .bg{
        position: absolute;
        width: auto;
        height: 100%;
        transform-origin: top center;
        transform: scale(1.2);
        z-index: 1;
      }
      .link-card{
        width: 40%;
        padding: 0;
        margin-right: auto;
        margin-left: 3.3%;
      }
    }
  }
  // no.4
  section.magazine{
    background: #BCF0FF;
    .figure{
      width: 74%;
      @include  md{
        width: 50%;
        padding: 9%;
      }
    }
  }
  // no.5
  section.works{
    background: $grey-5;
    .figure{
      width: 50%;
      @include  md{
        width: 47%;
        padding: 13%;
      }
    }
  }
  // no.6
  section.event{
    background: $pink;
    .figure{
      width: 55%;
      @include  md{
        width: 47%;
        padding: 12%;
      }
    }
  }
  // no.7
  section.company{
    background: $violet-dark;
    .figure{
      width: 53%;
      @include  md{
        width: 47%;
        padding: 12%;
      }
    }
  }
  // no.8
  section.contact{
    background: #9DFECA;
    .figure{
      width: 66%;
      @include  md{
        width: 47%;
        padding: 12%;
      }
    }
  }

}

</style>
