<template lang="html">
  <div class="page">
    <div id="learner">

      <div class="top-image" />
      <section class="top">
        <h1>初心者にこの事実を伝えるものはいない。</h1>
        <h2>創作活動をする者はみな、センスがあるから創作に夢中になるが、そこには現実とのギャップがある。</h2>
        <p>彼らの多くは才能はあってもそれほど優れているわけではないので、最初の数年はたいしたものは作れない。それでも、人を創作へと駆り立てるセンスというものはすばらしい。</p>
        <h2>センスがあるからこそ、人は自らの作品にがっかりするのだが、多くの人はその段階で止まってしまう。</h2>
        <p>おもしろい創作活動をしている知り合いの多くは、この段階が何年も続いた。自分の作品にあってほしい特別なものが欠けていることを知った全員がこの段階を経験する。あなたがまだ始めたばかりか、この段階にいるなら、それがごく当たり前のことだということを知ってほしい。</p>
        <h2>最も大事なことは多くの作品を作ることだ。</h2>
        <p class="copyright">ーーーアイラ・グラス（ラジオ・パーソナリティ）</p>
      </section>

      <section class="power-word">
        独創性があり社会的に重要なデザインがしたい学生にむけて、企画を２つ用意しました。
        <!-- <div class="small">重要なのは独自性？利便性？</div> -->
        <!-- 社会が求めるデザインを体験しよう！ -->
      </section>

      <section class="u25">
        <div class="img" data-scroll />

        <div class="md-left-item">
          <div class="heading" data-scroll>
            <h1>U-25 Program</h1>
            <h2>学生に仕事を依頼します</h2>
          </div>
          <p>まず、弊社代表の徳田があなたの将来についてのお話を伺います。その結果、進路設計と身につけているスキルが弊社の成長環境と合致していると判断できた場合に、実際のクライアントがいるデザインプロジェクトへの参加(一区切り3ヶ月間)をご提案させていただきます。応募は下記フォームから。</p>
          <div class="link-to">
            <span>面談してみる</span>
            <router-link to="/contact"><img src="~/assets/img/learner/btn-violet.svg" alt="面談予約のボタン"></router-link>
          </div>
          <div class="link-to">
            <span>プロジェクトレポート</span>
            <!-- <router-link to="/contact"><img src="~/assets/img/learner/btn-violet.svg" alt="利用者の感想を見る"></router-link> -->
            <a href="#"><img src="~/assets/img/learner/btn-violet.svg" alt="利用者の感想を見る"></a>
          </div>
        </div>

        <div class="step">
          <h1>ご利用ステップ</h1>
          <img src="~/assets/img/learner/u25-step.png" alt="学生のためのプログラムのステップ紹介">
        </div>
      </section>

      <section class="event">
        <div class="img" data-scroll />
        <div class="flex-item">
          <div class="heading" data-scroll>
            <h1>Event</h1>
            <h2>様々な気づきの場</h2>
          </div>
          <p>将来への不安を抱えるデザイン学生にとって恐らく「その話が聞きたかった！」と思える場所です。デザイナーに求められる素養は日進月歩で変わっています。そんな社会の状況の中でどんなスキル、心構えをもつべきか。Web分野の事例を中心に、弊社プロジェクトへ参加した学生が、現場での学びを発信します。(一区切り3ヶ月間)をご提案させていただきます。応募は下記フォームから。</p>
          <div class="link-to">
            <span>イベントを見てみる</span>
            <router-link to="/event"><img src="~/assets/img/learner/btn-white.svg" alt="面談予約のボタン"></router-link>
          </div>
        </div>
      </section>

    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Footer
  },
  mounted () { this.$store.state.so() },
  head () { return this.$store.state.getHead() },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.page{
  background: pale($pink);
}
#learner{
  background: #E1DFE2;
  color: $violet;
  font-size: 18px;
  @include md{
    font-size: 20px;
  };
}

.top-image{
  margin-top: 49px;
  width: 100%;
  height: 90vw;
  background: url(~assets/img/home/girl.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @include md{
    display: none;
  }
}
section.top{
  padding: 0 1.8rem;
  h1{
    margin-top: 2em;
    font-size: 1.7em;
    font-weight: 800;
    letter-spacing: 0.1em;
    line-height: 1.3;
    text-align: center;
    border-bottom: 13px solid;
  }
  h2{
    padding: 5em 0;
    font-size: 1.2em;
    font-weight: 600;
    line-height: 1.6;
    &.big{
      font-size: 1.4em;
    }
  }
  p{
    font-size: 0.9em;
    line-height: 1.8;
    &.copyright{
      font-size: 0.8em;
      padding-bottom: 6em;
    }
  }
  @include md{
    padding: 0 8%;
    background:
      linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
      url(~assets/img/home/girl.svg);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100%;
    font-size: 7.7vw;
    h1{
      font-size: 1em;
      margin-top: $header-height-sm;
      padding-top: 25vw;
      text-align: left;
    }
    h2{
      font-size: 0.33em;
      padding: 2em 0;
    }
    p{
      font-size: 0.2em;
      &.copyright{
        font-size: 0.16em;
      }
    }
  }
  @include lg{
    padding: 0 calc((100vw - 1100px) / 2);
    h1{
      font-size: 97px;
    }
  }
}

section.power-word{
  @include fullpage;
  background: $violet;
  color: $white;
  font-weight: 800;
  font-size: 2.4em;
  line-height: 1.5;
  padding-left: 0.8em;
  padding-right: 0.5em;
  .small{
    padding-left: 0.1em;
    width: 100%;
    font-size: 0.5em;
    line-height: 2;
    opacity: 0.6;
  }
  @include md{
    font-size: 2.7em;
    padding: 0 8%;
  }
  @include lg{
    font-size: 3.2em;
    padding: 0 calc((100vw - 1100px) / 2);
  }
}

section.u25,
section.event{
  padding: 3rem 5%;
  .img{
    margin: 4rem 0 2rem;
    width: 100%;
    height: 60vw;
    background-image: url(~assets/img/home/works.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .heading{
    position: relative;
    font-size: 2.5em;
    border-bottom: 11px solid;
    h1{
      font-size: 1em;
      font-weight: 700;
      line-height: 1.3;
    }
    h2{
      font-size: 0.45em;
      font-weight: 600;
      line-height: 1.5;
    }
  }
  p{
    padding: 2.6em 0;
    line-height: 1.6;
  }
  .link-to{
    padding-bottom: 1.4em;
    @include flex-center;
    flex-flow: column;
    align-items: flex-start;
    font-weight: 700;
    line-height: 3;
    span{
      padding-left: 0.3em;
    }
    img{
      width: 140px;
    }
  }

  .step{
    padding: 4em 0;
    h1{
      padding-bottom: 2em;
      font-size: 1.3em;
      font-weight: 700;
      text-align: center;
    }
  }

  &.event{
    background: $pink;
    color: $white;
    .img{
      background-image: url(~assets/img/home/event.svg);
    }
  }
}

section.u25{
  @include md{
    padding: 8%;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 55% 1fr;
    column-gap: 7%;
    row-gap: 1em;
    .img{
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      height: auto;
    }
    .md-left-item{
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
    .step{
      grid-row: 2;
      grid-column: 1 / 3;
    }
  }
  @include lg{
    padding: 6% calc((100vw - 1100px) / 2);
  }
}

section.event{
  @include md{
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: flex-start;
    .img{
      margin: 4%;
      max-height: 600px;
      flex: 1 1 25%;
    }
    .flex-item{
      padding: 4%;
      flex: 1 0 65%;
    }
  }
  @include lg{
    padding: 6% calc((100vw - 1100px) / 2);
    .img{
      margin: 4%;
      max-height: 600px;
      flex: 1 1 20%;
    }
    .flex-item{
      // padding: 6% 12% 6% 0;
      flex: 1 0 60%;
    }
  }
}
</style>
