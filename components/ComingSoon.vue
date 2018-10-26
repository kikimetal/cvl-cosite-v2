<template lang="html">
  <div class="coming-soon">
    <img class="usa" src="~/assets/img/nav/usa.svg" alt="">
    <h1>coming soon...</h1>
    <p>このページはうさちゃんが作成中です</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.coming-soon{
  width: 100%;
  height: 100vh;
  background: $pink;
  color: $white;
  font-weight: 900;
  @include flex-center;
  flex-flow: column;
  .usa{
    width: 20%;
    opacity: 0.4;
    @include md{
      width: 10%;
    }
  }
  h1{
    font-size: 27px;
    padding: 0.8em 0.5em 0.7em;
    opacity: 0.8;
  }
  p{
    opacity: 0.5;
  }
}
</style>
