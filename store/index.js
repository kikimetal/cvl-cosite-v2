import Vuex from 'vuex'
// import axios from 'axios'
import heads from '~/assets/heads.js'
import ScrollOut from "scroll-out"

const store = () => new Vuex.Store({
  state: {
    // heads: heads,
    // test: () => {console.log($nuxt.$route.path)},
    getHead: () => heads[$nuxt.$route.path],
    so: () => ScrollOut({
        // cssProps: {
        //   viewportY: true,
        //   visibleY: true
        // }
      })
  },
  mutations: {
    // setWindowHeight (state) {
    //   state.height = window.innerHeight
    // },
  }
})

export default store
