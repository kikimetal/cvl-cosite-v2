<template>
  <div class="page">
    <div id="works">
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
export default {
  mounted () { this.$store.state.so() },
  head () { return this.$store.state.getHead() },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
</style>
