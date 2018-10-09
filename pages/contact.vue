<template lang="html">
  <div id="contact">

    <div class="form-group">
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

  </div>
</template>

<script>
// cf. https://qiita.com/youdie/items/417ed2df1bcb6a60001c
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja' // 日本語ファイルを読み込み
VeeValidate.Validator.localize('ja', ja); // vee-validateの日本語
Vue.use(VeeValidate, { locale: ja });

export default {
  data () {
    return {
      app: {
        title: 'title',
        name: 'name',
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#contact{
  font-size: 20px;
  .form-group{
    display: flex;
    flex-flow: column;
    line-height: 2;
    input{
      color: grey;
    }
  }
}
</style>
