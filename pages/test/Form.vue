<template lang="html">
  <div class="page">
    <div id="contact">

      <div class="form-group">
        <label for="form_title">タイトル</label>
        <input type="text" name="app[title]" class="form-control"
        v-model="app.title"
        data-vv-as="タイトル"
        v-validate="'required|max:5|numeric'"
        :class="{'input': true, 'form-danger':
        errors.has('app[title]') }"
        />
        <div class="form-control-feedback" v-show="errors.has('app[title]')">
          <p class="alert alert-danger">{{ errors.first('app[title]') }}</p>
        </div>
      </div>

      <div class="form-group">
        <label for="form_name">お名前</label>
        <input type="text" name="app[name]" class="form-control"
        v-model="app.name"
        data-vv-as="お名前"
        v-validate="'required|max:5'"
        :class="{'input': true, 'form-danger':
        errors.has('app[name]') }"
        />
        <div class="form-control-feedback" v-show="errors.has('app[name]')">
          <p class="alert alert-danger">{{ errors.first('app[name]') }}</p>
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <input v-model="email" type="text" />
      <div @click="sendMail" class="" :style="{width: '300px', height: '300px', background: 'skyblue'}">
        send
      </div>
    </div>
  </div>
</template>

<script>

// VeeValidate
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja' // 日本語ファイルを読み込み
VeeValidate.Validator.localize('ja', ja); // vee-validateの日本語
Vue.use(VeeValidate, { locale: ja });

// firebase function
// const firebase = require("firebase");
// require("firebase/functions");
// firebase.initializeApp({
//   apiKey: 'AIzaSyAALL8_b9pyfQHvm6Zr2aRYSXX0irMUdO4',
//   authDomain: 'autumn-cosite-2018.firebaseapp.com',
//   projectId: 'autumn-cosite-2018',
//   databaseURL: 'https://autumn-cosite-2018.firebaseio.com',
// });
// // Initialize Cloud Functions through Firebase
// var functions = firebase.functions();

export default {
  components: {
  },
  data () {
    return {
      email: 'info@autumn-kyoto.com',
      app: {
        title: 'titleです',
        name: 'nameです',
      },
    }
  },
  methods: {
    sendMail: function () {
      const content = {
        destination: this.email,
        name: this.app.name,
        title: this.app.title,
      }
      // functions api
      const send = functions.httpsCallable('sendMail')
      send(content).then(function (result) {
        console.log(result)
      }).catch(function(err){
        console.log(err);
      })
    }
  },
  mounted () { this.$store.state.so() },
  head () { return this.$store.state.getHead() },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.page{

}
</style>
