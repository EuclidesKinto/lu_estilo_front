<template>
  <div class="default">
    <Header/>
    <Banner/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/header/Header";
import Footer from "~/components/footer/Footer";
import Banner from "~/components/Banner.vue";
export default {
  name: "index-banner",
  components: { Footer, Header, Banner }
}
</script>

<style scoped>

</style>
