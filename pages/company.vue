<template lang="html">
  <div class="page">
    <div id="company">

      <section class="top-heading">
        <div class="message">心を動かすつくり手が活躍する機会を拡げ続ける。</div>
        <div class="icon">
          <div class="img" />
          <div class="text">代表あいさつ</div>
        </div>
      </section>

      <section class="message-container">
        <p>
          初めまして。株式会社CARVANCL（カーバンクル）代表の徳田行伸と申します。
        </p>
        <p>
          私はクラシック音楽の分野で、その演奏技術を生かして人を感動させ続けられる、感動するものをつくり続けることのできる職業に就きたいとずっと願っていました。
        </p>
        <p>
          しかしそんな職業は現代の音楽市場だと楽団に入る以外になく、気が遠くなってしまうほどの狭き門でした。直接でなくても、少しでも近い領域の仕事があればと思いましたが、そんな職業は思いつかなかったし誰も教えてくれませんでした。<br>
          周りの芸大、美大などに進んだ友人など、自分たちよりも「人の心を動かす」技術を突き詰めている人間ですら、将来の選択肢が非常に限られていることを目の当たりにしました。
        </p>
        <p>
          「人の心を動かす」技術が価値がないわけがない。世の中から求められてないわけがない。そう思い、今の時代はそういった力はどこで求められているのかを探し始めたのがCARVANCL創業のきっかけです。
        </p>
        <p>
          今の時代は、「デジタル」のクリエイティブに分野に、その技術を持つ人たちを強く求める熱が湧き上がっています。<br>
          ただ、じゃあ何が求められている技術なのか、どうやってその技術を身につければいいかを知る機会が圧倒的に足りません。
        </p>
        <p>
          私たちCARVANCLの役割は、その知る機会と、身につけるための手段を提供することです。<br>
          私たちは、人の心を動かし続けたい、心を動かすものを作り続けたい若者に、その必要とされている世界へ行くための”切符”を手にできる機会を作り続けることを企業の存在意義とします。
        </p>
      </section>

      <section class="info">
        <img class="img" src="~/assets/img/home/company.svg" alt="">
        <h1>会社情報</h1>
        <p>
          株式会社 CARVANCL（CARVANCL Inc.）
        </p>
        <p>
          設立：2017年6月
        </p>
        <p>
          資本金 ：100万円
        </p>
        <p>
          代表取締役：徳田行伸（Yukinobu Tokuda）
        </p>
        <p>
          Webサイト、アプリケーションの開発<br>
          クリエイター育成/採用支援<br>
          クリエイティブによる地方創生
        </p>
        <p>
          本社：東京都千代田区五番町12-6  五番町マンションB1F
        </p>
        <p>
          支社：山口県周南市若宮町1-21 3F
        </p>
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
  background: pale($violet-dark);
}
#company{
  background: $violet;
  color: #FAECB2;
}

.top-heading{
  padding: 7.6em 1.5em 4em;
  display: flex;
  flex-flow: column;
  @include md{
    padding: 8em calc((100vw - 900px) / 2) 4em;
    flex-flow: column-reverse;
  }
  .icon{
    padding: 3em 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    .img{
      width: 180px;
      height: 180px;
      background: url(~assets/img/company/tokuda.png);
      background-repeat: no-repeat;
      background-size: cover;
      @include md{
        width: 200px;
        height: 200px;
      };
    }
    .text{
      padding-top: 1em;
      font-size: 1.6em;
      font-weight: 600;
    }
  }
  .message{
    margin: 1em 0;
    padding-bottom: 0.2em;
    font-size: 2.6em;
    font-weight: 700;
    line-height: 1.5;
    border-bottom: 11px solid;
  }
}

.message-container,
.info{
  padding: 0 1.5em 4em;
  line-height: 1.9;
  @include md{
    padding: 0 calc((100vw - 900px) / 2) 4.4em;
  }
  p{
    padding: 1.1em 0;
  }
}

.info{
  padding-top: 4em;
  background: $violet-dark;
  .img{
    width: 46%;
    margin: auto;
    display: block;
    padding-bottom: 3em;
  }
  h1{
    margin-bottom: 1em;
    font-size: 2em;
    font-weight: 700;
    line-height: 2;
    border-bottom: 11px solid;
    text-align: center;
  }
}

</style>
