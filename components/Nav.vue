<template lang="html">
  <div id="nav">

  <nav :class="['header', getContextColor()]">
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
    <router-link to="/contact" class="popup" v-show="$store.state.isScrollTop && !$store.state.isShowNav && $route.path !== '/contact'">
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
  enter-active-class="animated jackInTheBox"
  leave-active-class="animated rollOut">
    <nav class="global-menu"
    v-show="$store.state.isShowNav"
    @click="$store.commit('toggleNav', false)">
      <h2 class="heading">共通メニュー</h2>
      <router-link exact to="/service" class="link">
        <img class="icon" src="~/assets/img/nav/hands.svg" alt="">
        <span class="en">Service</span><span class="ja">私たちのデザイン</span></router-link>

      <router-link exact to="/company" class="link">
        <img class="icon" src="~/assets/img/nav/company.svg" alt="">
        <span class="en">Company</span><span class="ja">代表挨拶と会社概要</span></router-link>

      <router-link exact to="/works" class="link">
        <img class="icon book" src="~/assets/img/nav/book.svg" alt="">
        <span class="en">Works</span><span class="ja">実績一覧</span></router-link>

      <router-link exact to="/contact" class="link">
        <img class="icon mail" src="~/assets/img/nav/mail-b.svg" alt="">
        <span class="en">Contact</span><span class="ja">お問い合わせ</span></router-link>

      <h2 class="heading">学生へ</h2>
      <router-link exact to="/u25" class="link">
        <img class="icon" src="~/assets/img/nav/hands.svg" alt="">
        <span class="en">For Learner</span><span class="ja">学ぶ人へ</span></router-link>

      <router-link exact to="/" class="link">
        <img class="icon" src="~/assets/img/nav/hands.svg" alt="">
        <span class="en">Event</span><span class="ja">お話ししましょう</span></router-link>
    </nav>
  </transition>

</div>
</template>

<script>
export default {
  data () {
    return {
      progressBarWidth: 0,
      pageTransitionActive: false,
    }
  },
  methods: {
    getContextColor () {
      const path = this.$route.path
      if (path === '/service') return 'black'
      else if (path === '/u25') return 'violet'
      else if (path === '/company') return 'violet-dark'
      else if (path === '/contact') return 'red'
      return 'slyblue'
    }
  },
  created () {
    const setProgressBarWidth = () => {
      if (this.pageTransitionActive) return
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      this.progressBarWidth = scrolled
    }
    window.addEventListener('scroll', setProgressBarWidth)

    this.$router.afterEach((to, from) => {
      this.progressBarWidth = 0
      this.pageTransitionActive = true
      setTimeout(() => this.pageTransitionActive = false, 1500)
    })
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

#nav{

  .popup{
    position: fixed;
    top: 10vw;
    right: 10vw;
    width: 200px;
    z-index: 999;
  }

  .global-menu-background{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    z-index: 999;
    backdrop-filter: blur(20px);
    img.close{
      position: absolute;
      top: 3.8%;
      right: 8%;
      width: 1.6rem;
      height: auto;
    }
  }

  .global-menu{
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
    .heading{
      padding: 4vw 0 2vw;
      font-weight: 600;
      opacity: 0.3;
    }
    .link{
      height: 15vw;
      display: flex;
      flex-flow: row;
      justify-content: flex-start;
      align-items: center;
      font-weight: bold;
      border-radius: 0.5em;
      .en{
        padding-right: 0.3em;
        font-size: 1.7rem;
        @include futura;
      }
      .ja{
        padding-top: 0.45em;
        font-size: 0.9rem;
        opacity: 0.5;
      }
      .icon{
        margin-left: 2.6vw;
        margin-right: 2.6vw;
        width: 2em;
        height: 2em;
        opacity: 0.5;
        &.book{
          padding-top: 0.3em;
        }
        &.mail{
          height: 1.2em;
        }
      }
      &.nuxt-link-exact-active{
        background: $skyblue;
        color: $white;
        .icon{
          filter: brightness(5);
        }
      }
    }
  }

  .header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 1.5rem;
    $height: 52px;
    height: $height;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    background: $skyblue;
    color: $white;
    @include futura;
    box-shadow: 0 0 12px 0 rgba(0,0,0,0.05);
    z-index: 99;

    transition: all 0.9s ease;

    &.black{ background: $black; }
    &.violet{ background: $violet; }
    &.violet-dark{ background: $violet-dark; }
    &.red{ background: $red; }

    .logo{
      margin-right: auto;
      width: 20%;
      @include flex-center;
    }

    .progress-bar-container{
      box-sizing: content-box;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: 28%;
      --height: 5px;
      background: rgba(0,0,0,0.1);
      border-radius: var(--height);
      @include md{
        --height: 11px;
        width: 22%;
      }
      .bar {
        padding-left: calc(var(--height) * 1.3);
        height: var(--height);
        background: rgba($white, 0.8);
        border-radius: var(--height);
        width: 0%;
        &.transition{
          transition: width 0.4s $ease-out;
        }
      }
    }

    .contact{
      width: 13%;
      height: $height;
      @include flex-center;
      justify-content: flex-start;
      img{
        display: block;
        width: 48%;
      }
    }
    .menu{
      width: 13%;
      height: $height;
      @include flex-center;
      justify-content: flex-start;
      img{
        display: block;
        width: 43%;
      }
    }
  }
}
</style>
