<template>
  <div class="bg-cyan-900">
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
export default {
  name: "website",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>
