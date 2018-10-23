import Vuex from 'vuex'
// import axios from 'axios'
import heads from '~/assets/heads.js'
// import ScrollOut from "scroll-out"

const store = () => new Vuex.Store({

  state: {
    isScrollTop: true,
    isShowNav: false,
    getHead: () => heads[$nuxt.$route.path],
    // so: () => ScrollOut({
    //   cssProps: {
    //     // viewportY: true,
    //     visibleY: true
    //   }
    // })
    so: () => {},
  },

  mutations: {
    setIsScrollTop (state) {
      const isScrollTop = window.scrollY < 100
      if (state.isScrollTop === isScrollTop) return
      state.isScrollTop = isScrollTop
    },
    toggleNav (state, isShow) {
      if (isShow === undefined) {
        state.isShowNav = !state.isShowNav
      }else{
        state.isShowNav = isShow
      }
    },
  }
})

export default store
