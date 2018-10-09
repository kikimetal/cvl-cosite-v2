<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        cvl-cosite-v2
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
        href="https://nuxtjs.org/"
        target="_blank"
        class="button--green">Documentation</a>
        <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        class="button--grey">GitHub</a>
      </div>
    </div>

    <!-- <div class="form-group">
      <label for="form_title">タイトル</label>
      <input type="text" name="app[title]" class="form-control"
      v-model="app.title"
      data-vv-as="タイトル"
      v-validate="'required|max:5'"
      :class="{'input': true, 'form-danger':
      errors.has('app[title]') }"
      />
      <div class="form-control-feedback" v-show="errors.has('app[title]')">
        <p class="alert alert-danger">{{ errors.first('app[title]') }}</p>
      </div>
    </div> -->

  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
// import axios from 'axios'

// cf. https://qiita.com/youdie/items/417ed2df1bcb6a60001c
// import Vue from 'vue'
// import VeeValidate from 'vee-validate'
// // 日本語ファイルを読み込み
// import ja from 'vee-validate/dist/locale/ja'
// // vee-validateの日本語
// VeeValidate.Validator.localize('ja', ja);
// Vue.use(VeeValidate, { locale: ja });

export default {
  components: {
    AppLogo
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
