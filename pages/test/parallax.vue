<template lang="html">
  <div class="container">
    <h1 v-parallax="-0.3">vue-parallax-js</h1>
    <h1>vue-parallax-js</h1>
    <h1 v-parallax="-0.3">vue-parallax-js</h1>
    <h1>vue-parallax-js</h1>
    <h1 v-parallax="-0.3">vue-parallax-js</h1>
    <h1>vue-parallax-js</h1>
    <h1 v-parallax="-0.3">vue-parallax-js</h1>
    <h1>vue-parallax-js</h1>
    <h1 v-parallax="-0.3">vue-parallax-js</h1>
    <h1>vue-parallax-js</h1>
    <h1 v-parallax="-0.3">vue-parallax-js</h1>
    <h1>vue-parallax-js</h1>
  </div>
</template>

<script>
// import Vue and vue-parallax-js
import Vue from 'vue'
import VueParallaxJs from 'vue-parallax-js'
// add vue-parallax-js to vue
Vue.use(VueParallaxJs, { className: 'v-parallax' })

export default {
}
</script>

<style lang="scss" scoped>
.container{
  background: grey;
}
.container{
  height: 500vh;
  padding-top: 30vh;
}
h1{
  // margin-bottom: 300px;
  width: 100%;
  height: 5vh;
  // background: lightgrey;
  color: white;
  font-size: 40px;
  font-weight: 900;
  &:nth-child(even){
    // background: pink;
    color: pink;
  }
  position: relative;
  // &::before{
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   top: auto;
  //   left: 0;
  //   right: 0;
  //   bottom: -20vh;
  //   height: 20vh;
  //   background: inherit;
  // }
  &.v-parallax{
    z-index: 2;
    height: 10vh;
  }
}
</style>
