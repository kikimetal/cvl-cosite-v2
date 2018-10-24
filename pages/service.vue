<template lang="html">
  <div class="page">
    <div id="service">

      <section>
        <h1 class="heading top">白紙からのデザインワーク</h1>
        <img class="figure" data-scroll src="~/assets/img/service/design-work.png" alt="" />
        <p data-scroll>
          CARVANCLは、既に誰でもできる形で方法が確立されたデザインワークを、大衆に向けて行う会社ではありません。
        </p>
      </section>

      <section>
        <h1 class="heading" data-scroll>目指すのはブランドづくり</h1>
        <img class="figure" data-scroll src="~/assets/img/service/make-brand.png" alt="" />
        <p data-scroll>
          まだ正解が確立していない世界で、企業・プロダクトを熱狂的に愛してくれるファンをつくりだし、共にブランドを積み上げていく会社です。
        </p>
      </section>

      <section>
        <h1 class="heading" data-scroll>御社のためのデザインチームです</h1>
        <img class="figure" data-scroll src="~/assets/img/service/design-team.svg" alt="" />
        <p data-scroll>
          CARVANCLのデザインは全て期間を定めたプロジェクト型で、クライアント様に合わせてオーダーメイドされたデザインチームを編成します。
        </p>
        <p data-scroll>
          御社のデザイン責任者の立場をディレクターが担い、プロジェクト全体をリードします。
        </p>
        <p data-scroll>
          クライアント様と綿密やヒアリングやディスカッション、アイデアブレストを重ね、デザインアウトプットを洗練させていきます。
        </p>
      </section>

      <section>
        <h1 class="heading" data-scroll>利用者の気持ちに真剣に向き合う</h1>
        <img class="figure" data-scroll src="~/assets/img/service/dmf.png" alt="" />
        <p data-scroll>
          デザインとはコミュニケーションであり、コミュニケーションの最も大きなリスクは「伝わないこと」よりも「誤解」です。
        </p>
        <p data-scroll>
          そのため、理想的なコミュニケーションが生まれる前にデザインアウトプットを拡散することはリスクを伴います。
        </p>
        <p data-scroll>
          弊社はデザインプロトタイプを用いて対象ユーザーへのインタビューを行い「伝えたいことが伝わる・解決したいことが解決されている」状態の実現を目指します。
        </p>
      </section>

      <section>
        <h2 class="subheading">
          <img class="icon" src="~/assets/img/service/icon/discussion.svg" alt="">
          <span class="en">Discussion</span><span class="ja">問題の特定</span>
        </h2>
        <p>
          質問を重ね、情報を収集し、解決すべき問題を特定するプロセスです。
        </p>
        <p>
          デザインプロジェクトにおける目標達成が企業戦略の推進につながるように、プロジェクト全体を設計します。その過程で業界とユーザーの情報収集を十分に行うとともに、クライアント様とデザインチームで密接な議論を丁寧に重ねます。
        </p>

        <h2 class="subheading">
          <img class="icon" src="~/assets/img/service/icon/analisys.svg" alt="">
          <span class="en">Analisys</span><span class="ja">分析と最適化</span>
        </h2>
        <p>
          デザインのコンセプトと方向性を、検証と分析で絞り込んでいくプロセスです。
        </p>
        <p>
          対象ユーザーからの実際のフィードバックを受け、修正を迅速に繰り返します。その過程で、最適なデザインを実現するための意思決定をプロジェクトチームで何度も行い、デザインアウトプットとして磨き上げます。
        </p>

        <h2 class="subheading">
          <img class="icon" src="~/assets/img/service/icon/design-test.svg" alt="">
          <span class="en">Design Test</span><span class="ja">方向性の検証</span>
        </h2>
        <p>
          様々なデザインの方向性と解決策を検討し、対象ユーザーを巻き込んだ理想的なシナリオを探るプロセスです。収集したデータ・情報からインサイトを引き出し、様々な仮説を具体的に検証していきます。その過程で、ペルソナやストーリーボードを洗練させていき、特定した問題と解決策との対応を図ります。
        </p>
      </section>

      <section>
        <h1 class="heading" data-scroll>ともに御社のブランドをつくりたいと思っています</h1>
        <img class="figure" data-scroll src="~/assets/img/service/branding-with-us.png" alt="" />
        <p>
          1つのデザインプロジェクトによって、企業のブランドが形作られることはあり得ません。
        </p>
        <p>
          理想的なコミュニケーションがあらゆる方面で達成されていることで、企業・プロダクトはブランド化していきます。
        </p>
        <p>
          CARVANCLはWebサービスを中心に、Webアプリケーション、グラフィックなど様々なデザインアウトプットを製作可能な体制をとっています。
        </p>
        <p>
          御社にとって頼りになるデザインの伴走者として、複数のプロジェクトを共にしていきたいと考えます。
        </p>
      </section>

      <section class="full to-magazine">
        <img class="figure" src="~/assets/img/home/magazine.svg" alt="株式会社カーバンクルへのお問い合わせはこちら" data-scroll v-parallax="0.1" />
        <router-link to="/magazine" class="link-to" data-scroll v-parallax="-0.1">
          <!-- <router-link to="/contact" class="link-to" data-scroll> -->
          <img src="~/assets/img/home/magazine-btn.svg" alt="magazine 実績紹介を見る" />
        </router-link>
      </section>
      <section class="full to-contact">
        <img class="figure" src="~/assets/img/home/contact.svg" alt="株式会社カーバンクルへのお問い合わせはこちら" data-scroll v-parallax="0.1" />
        <router-link to="/contact" class="link-to" data-scroll v-parallax="-0.1">
          <!-- <router-link to="/contact" class="link-to" data-scroll> -->
          <img src="~/assets/img/home/contact-btn.svg" alt="contact お問い合わせ" />
        </router-link>
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
}

section:not(.full){
  padding-bottom: 8rem;

  .heading{
    &.top{ padding-top: 5.5em; }
    width: 84%;
    margin: 0 auto;
    color: $black;
    font-weight: 900;
    font-size: 32px;
    @include md{
      font-size: 40px;
    };
    letter-spacing: 0.1em;
    line-height: 1.3;
    text-align: center;
    border-bottom: 13px solid;
  }

  .figure{
    display: block;
    padding: 6.6em 1em 6em;
    margin: 0 auto;
    width: 100%;
  }

  p{
    padding: 0.5em 2em;
    font-size: 1.1rem;
    line-height: 1.7;
  }

  .subheading{
    padding-left: 3%;
    margin: 0 auto;
    width: 84%;
    height: 15vw;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    border-bottom: 10px solid;
    .en{
      padding-right: 0.4em;
      font-size: 1.7rem;
    }
    .ja{
      padding-top: 0.45em;
      font-size: 0.9rem;
      opacity: 0.4;
    }
    .icon{
      margin-right: 2.6vw;
      width: 2em;
      height: 2em;
      &.book{
        padding-top: 0.3em;
      }
      &.mail{
        height: 1.2em;
      }
    }
  }

  .subheading + p{
    padding-top: 1.3em;
  }
  p + .subheading{
    margin-top: 4em;
  }
}

section.full{
  @include section-simple;
  &.to-magazine{
    background: #BCF0FF;
    .figure{
      width: 76%;
    }
  }
  &.to-contact{
    background: #9DFECA;
    .figure{
      width: 60%;
    }
  }
}

</style>
