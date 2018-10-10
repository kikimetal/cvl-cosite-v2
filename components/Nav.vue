<template lang="html">
  <div id="nav">
    <nav>
      <span class="logo">
        carvancl
      </span>
      <div id="progress-bar-container">
        <div id="bar" :class="[{transition: pageTransitionActive}]" :style="{width: progressBarWidth+'%'}"></div>
      </div>
      <span class="right-item">
        <span class="contact">[mail]</span>
        <span class="bars">=</span>
      </span>
    </nav>
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
  nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 10px;
    height: 32px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background: $skyblue;
    color: $white;
    @include futura;
    z-index: 999999;
  }
}

#progress-bar-container{
  box-sizing: content-box;
  width: 28%;
  --height: 5px;
  background: $blue;
  border-radius: var(--height);
  @include md{
    --height: 11px;
    width: 22%;
  }
  #bar {
    padding-left: calc(var(--height) * 1.3);
    height: var(--height);
    background: white;
    border-radius: var(--height);
    width: 0%;
    &.transition{
      transition: width 0.4s ease;
    }
  }
}
</style>
