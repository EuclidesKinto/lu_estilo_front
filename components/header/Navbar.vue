<template>
  <nav class="bg-blue-500 py-5">
    <div class="container flex ">
      <div class="flex items-center justify-between flex-grow px-3">
        <div class="flex md:items-center space-x-3 capitalize flex-wrap md:flex-no-wrap">
          <a href="/" class="text-gray-200 hover:text-white transition">Camisetas</a>
          <a href="" class="text-gray-200 hover:text-white transition">Abadás</a>
          <a href="#" class="text-gray-200 hover:text-white transition">Uniformes</a>
        </div>
        <nuxt-link to="/register" class="text-gray-200 hover:text-white transition">Cadastre-se</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
