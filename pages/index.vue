<template>
  <div class="page">
    <div id="home">
      <router-link to="/service">

        <section>
          <div data-scroll>
            HELOOO<br>HELOOO<br>HELOOO<br>
          </div>
        </section>
        <section>
          <div data-scroll>
            HELOOO<br>HELOOO<br>HELOOO<br>
          </div>
        </section>
        <section>
          <div data-scroll>
            HELOOO<br>HELOOO<br>HELOOO<br>
          </div>
        </section>
        <section>
          <div data-scroll>
            HELOOO<br>HELOOO<br>HELOOO<br>
          </div>
        </section>
        <section>
          <div data-scroll>
            HELOOO<br>HELOOO<br>HELOOO<br>
          </div>
        </section>

      </router-link>
  </div>
  </div>
</template>

<script>
import ScrollOut from "scroll-out"

export default {
  components: {},
  mounted () {
    ScrollOut()
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.page{
  background: pale($skyblue);
}
#home{
  section{
    font-size: 60px;
    width: 100%;
    height: 190vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    @include futura;
    @include md {
      height: 58vw;
    }
    @include lg {
      height: 52vw;
    }
  }

  section:nth-of-type(1){
    background: #2294E3;
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
