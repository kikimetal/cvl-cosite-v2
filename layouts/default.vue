<template>
  <div>
    <div id="bg">
      <span>💙CARVANCL</span>
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
  }
}
</script>

<style lang="scss">
@import '~/assets/css/myset.scss';
:root{
  --scrollY: 0px;
}

.page > *{
  overflow: hidden;
}

#bg{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 900;
  background: $white;
  z-index: -9999;
  span{
    @include futura;
    color: $pink;//非対応のブラウザでの文字色を設定
    background: -webkit-linear-gradient(12deg, $pink, $blue);//背景色にグラデーションを指定
    -webkit-background-clip: text;//テキストでくり抜く
    -webkit-text-fill-color: transparent;//くり抜いた部分は背景を表示
    line-height: 3;
  }
}

/* nuxt page transition */
.page-enter-active {
  position: relative;
  $duration: 1.6s;
  $delay: 0s;
  animation: page-enter $duration $ease-out $delay both;
  @keyframes page-enter{
    0%{
      transform: translateX(100vw);
    }
    66%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(0);
    }
  }
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    transform-origin: right;
    animation: over-enter $duration $ease-out $delay both;
    @keyframes over-enter{
      0%{
        transform: translateX(0);
      }
      100%{
        transform: translateX(-100vw);
      }
    }
  }
}
.page-leave-to {
  position: relative;
  $duration: 1.1s;
  $delay: 0.05s;
  animation: page-leave $duration $ease-out $delay both;
  @keyframes page-leave{
    0%{
      transform: translateX(0);
    }
    50%{
      transform: translateX(-100vw);
    }
    100%{
      transform: translateX(-100vw);
    }
  }
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    z-index: -1;
    $under-delay: 0.15s;
    animation: over-leave $duration - $under-delay $ease-out $under-delay + $delay both;
    @keyframes over-leave{
      0%{
        transform: translateX(100vw);
      }
      100%{
        transform: translateX(0);
      }
    }
  }
}
// .page-leave-to {}
// .page-enter{}

</style>
