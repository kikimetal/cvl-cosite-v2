<template>
  <div class="page">
    <div id="service">
      <router-link to="/">
        <section>
          HELOOO<br>
          HELOOO<br>
          HELOOO<br>
          HELOOO<br>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service',
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.page{
  background: pale($pink);
}
#service{
  overflow: hidden;
  section{
    width: 100%;
    height: 500px;
    height: 184vw;
    font-size: 120px;
    @include md {
      height: 58vw;
    }
    @include lg {
      height: 52vw;
    }
  }

  section:nth-of-type(1){
    background: #d6bec9;
  }
  section:nth-of-type(2){
    background: #E45B5B;
  }
  section:nth-of-type(3){
    background: #E9E8EB;
  }
  section:nth-of-type(4){
    background: #757575;
  }
  section:nth-of-type(5){
    background: #FE9DA0;
  }
}

</style>
