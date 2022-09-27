<template>
  <div>
    <header class="py-4 shadow-sm bg-white container mx-auto">
      <div class="flex container flex-wrap md:flex-no-wrap items-center md:justify-between justify-center">

        <nuxt-link to="/" class="text-2xl font-bold text-blue-500 ">Lu Estilo</nuxt-link>


        <div class="md:mt-0 mt-3 w-full max-w-xl relative flex">
          <input type="text" name="search" id="search"
                 class="w-full border border-primary border-r-0 pl-3 py-3 pr-3 rounded-l-md focus:outline-none"
                 placeholder="Pesquisar...">
          <button class="bg-blue-500 border border-primary text-white px-8 rounded-r-md hover:bg-blue-600 hover:text-gray-100 transition">
            <span class=" top-3 text-lg text-white">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
          </button>
        </div>

        <div class="flex items-center space-x-4 md:mt-0 mt-3">
          <a href="#" class="text-center text-gray-700 hover:text-primary transition relative">
            <div class="text-2xl">
              <i class="fa-solid fa-bag-shopping"></i>
            </div>
          </a>
          <a href="#" class="text-center text-gray-700 hover:text-primary transition relative">
            <div class="text-2xl">
              <i class="fa-regular fa-user"></i>
            </div>
          </a>
        </div>

      </div>
    </header>
    <Navbar/>
  </div>

</template>

<script>
import Navbar from "~/components/header/Navbar";
export default {
  name: "Header",
  components: {Navbar}

}
</script>

<style scoped>

</style>
