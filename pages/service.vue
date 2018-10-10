<template>
  <div class="page">
    <div id="service">
      <router-link to="/">

        <section>
          <div data-scroll>
            HELLO<br>HELLO<br>HELLO<br>
          </div>
        </section>
        <section>
          <div data-scroll>
            HELLO<br>HELLO<br>HELLO<br>
          </div>
        </section>
        <section>
          <div data-scroll>
            HELLO<br>HELLO<br>HELLO<br>
          </div>
        </section>
        <section>
          <div data-scroll>
            HELLO<br>HELLO<br>HELLO<br>
          </div>
        </section>
        <section>
          <div data-scroll>
            HELLO<br>HELLO<br>HELLO<br>
          </div>
        </section>

      </router-link>
    </div>
  </div>
</template>

<script>
import ScrollOut from "scroll-out"

export default {
  mounted () {
    ScrollOut()
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.page{
  background: pale($pink);
}
#service{

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
