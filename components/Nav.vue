<template lang="html">
  <div id="nav">

  <nav :class="['header', headerContextColor]">
    <router-link to="/" class="logo">
      <img src="~/assets/img/home/co-name.svg" alt="">
    </router-link>
    <div class="progress-bar-container">
      <div class="bar" :class="[{transition: pageTransitionActive}]" :style="{width: progressBarWidth+'%'}"></div>
    </div>
    <router-link to="/contact" class="contact">
      <img src="~/assets/img/nav/mail-w.svg" alt="">
    </router-link>
    <span class="menu"
    @click="$store.commit('toggleNav')">
      <img src="~/assets/img/nav/bars.svg" alt="">
    </span>
  </nav>

  <transition
  appear
  enter-active-class="animated tada"
  leave-active-class="animated bounceOutRight">
    <router-link to="/contact" class="popup" v-show="$store.state.isScrollTop && !$store.state.isShowNav && $route.path === '/service'">
      <img src="~/assets/img/nav/popup.svg" alt="">
    </router-link>
  </transition>

  <transition name="fade">
    <div class="global-menu-background"
    v-if="$store.state.isShowNav"
    @click="$store.commit('toggleNav', false)">
      <img class="close" src="~/assets/img/nav/close.svg" alt="">
    </div>
  </transition>

  <transition
  enter-active-class="animated fadeInRight fast"
  leave-active-class="animated fadeOutLeft">
    <nav class="global-menu"
    v-show="$store.state.isShowNav"
    @click="$store.commit('toggleNav', false)">

      <div class="flex-item">
        <h2 class="heading">共通メニュー</h2>
        <router-link exact to="/service" class="link">
          <img class="icon" src="~/assets/img/nav/icon/service.svg" alt="">
          <span class="en">Service</span><span class="ja">私たちのデザイン</span>
        </router-link>
        <router-link exact to="/magazine" class="link">
          <img class="icon" src="~/assets/img/nav/icon/magazine.svg" alt="">
          <span class="en">Magazine</span><span class="ja">プロジェクトの中身</span>
        </router-link>
        <router-link exact to="/works" class="link">
          <img class="icon" src="~/assets/img/nav/icon/works.svg" alt="">
          <span class="en">Works</span><span class="ja">実績一覧</span>
        </router-link>
        <router-link exact to="/contact" class="link">
          <img class="icon" src="~/assets/img/nav/icon/contact.svg" alt="">
          <span class="en">Contact</span><span class="ja">お問い合わせ</span>
        </router-link>
        <router-link exact to="/company" class="link">
          <img class="icon" src="~/assets/img/nav/icon/company.svg" alt="">
          <span class="en">Company</span><span class="ja">代表挨拶と会社概要</span>
        </router-link>
      </div>

      <div class="flex-item">
        <h2 class="heading">学生へ</h2>
        <router-link exact to="/learner" class="link">
          <img class="icon" src="~/assets/img/nav/icon/learner.svg" alt="">
          <span class="en">For Learner</span><span class="ja">学ぶ人へ</span>
        </router-link>
        <router-link exact to="/event" class="link">
          <img class="icon" src="~/assets/img/nav/icon/event.svg" alt="">
          <span class="en">Event</span><span class="ja">お話ししましょう</span>
        </router-link>
      </div>

    </nav>
  </transition>

</div>
</template>

<script>
export default {
  data() {
    return {
      progressBarWidth: 0,
      pageTransitionActive: false,
      headerContextColor: ''
    }
  },
  methods: {
    getContextColor() {
      const route = this.$route.name
      if (route === 'index') return 'skyblue'
      else if (route === 'service') return 'black'
      else if (route === 'learner') return 'violet'
      else if (route === 'company') return 'violet-dark'
      else if (route === 'contact') return 'pink'
      return 'red'
    }
  },
  created() {
    const setProgressBarWidth = () => {
      if (this.pageTransitionActive) return
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      this.progressBarWidth = scrolled
    }

    window.addEventListener('scroll', setProgressBarWidth)

    this.$router.afterEach((to, from) => {
      this.progressBarWidth = 0
      this.pageTransitionActive = true
      setTimeout(() => (this.pageTransitionActive = false), 1500)

      this.headerContextColor = this.getContextColor()
    })
  },
  mounted() {
    this.headerContextColor = this.getContextColor()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
#nav {
  .popup {
    position: fixed;
    top: 10vw;
    right: 10vw;
    width: 200px;
    z-index: 999;
    @include md {
      top: 40px;
      right: 120px;
    }
  }

  .global-menu-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
    backdrop-filter: blur(20px);
    cursor: pointer;
    img.close {
      position: absolute;
      top: 3.8%;
      right: 8%;
      width: 1.6rem;
      height: auto;
      @include md {
        top: 5%;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    }
  }

  .global-menu {
    position: fixed;
    top: 12%;
    left: 0;
    right: 0;
    padding: 0.8em 1rem 2em;
    margin: 0 auto;
    width: 90%;
    min-height: 300px;
    background: $white;
    color: $black;
    box-sizing: border-box;
    border-radius: 14px;
    box-shadow: 0 0 0 12px $grey-5;
    z-index: 9999;
    @include md {
      max-width: 1000px;
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: flex-start;
      .flex-item {
        width: 46%;
        max-width: 400px;
        margin: 0 1%;
      }
    }

    .heading {
      padding: 4vw 0 2vw;
      font-weight: 600;
      opacity: 0.3;
      @include md {
        padding: 2em 1.8em 0.3em;
      }
    }
    .link {
      margin: 3px 0;
      padding-left: 2.6vw;
      height: 15vw;
      max-height: 66px;
      display: flex;
      flex-flow: row;
      justify-content: flex-start;
      align-items: center;
      font-weight: bold;
      border-radius: 0.5em;
      transition: all 0.2s ease;
      @include md {
        height: 4.4em;
        &:hover {
          background: rgba($skyblue, 0.2);
        }
      }
      .en {
        padding-right: 0.3em;
        font-size: 1.7rem;
      }
      .ja {
        padding-top: 0.45em;
        font-size: 0.9rem;
        opacity: 0.4;
      }
      .icon {
        margin-right: 2vw;
        width: 2em;
        height: 2em;
        opacity: 0.3;
        &.book {
          padding-top: 0.3em;
        }
        &.mail {
          height: 1.2em;
        }
      }
      &.nuxt-link-exact-active {
        background: $skyblue;
        color: $white;
        .icon {
          filter: brightness(5);
        }
      }
    }
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    $height: $header-height-sm;
    height: $height;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    background: $skyblue;
    color: $white;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
    z-index: 99;

    transition: all 0.9s ease;

    &.black {
      background: $black;
    }
    &.violet {
      background: $violet;
    }
    &.violet-dark {
      background: $violet-dark;
    }
    &.pink {
      background: $pink;
    }
    &.red {
      background: $red;
    }

    .logo {
      margin-right: auto;
      margin-left: 5%;
      width: 23%;
      @include flex-center;
      @include md {
        // width: auto;
        // width: 40%;
        width: 340px;
        transform-origin: left center;
        transform: scale(0.45);
      }
    }

    .progress-bar-container {
      box-sizing: content-box;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: 28%;
      --height: 5px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: var(--height);
      @include md {
        --height: 7px;
        width: 22%;
        max-width: 230px;
      }
      .bar {
        padding-left: calc(var(--height) * 1.3);
        height: var(--height);
        background: rgba($white, 0.7);
        border-radius: var(--height);
        width: 0%;
        &.transition {
          transition: width 0.4s $ease-out;
        }
      }
    }

    .contact {
      width: 12%;
      height: $height;
      @include flex-center;
      cursor: pointer;
      img {
        transform: scale(0.5);
      }
      @include md {
        width: 90px;
        img {
          transform: scale(0.45);
        }
      }
    }
    .menu {
      margin-right: 3%;
      width: 12%;
      height: $height;
      @include flex-center;
      cursor: pointer;
      img {
        transform: scale(0.5);
      }
      @include md {
        width: 90px;
        img {
          transform: scale(0.42);
        }
      }
    }
  }
}
</style>
