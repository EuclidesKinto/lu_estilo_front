<template>
  <div>
    <clientOnly>
      <notifications
      position="bottom center"
      classes="pointer bg-green-500 text-white px-3 py-1"
      :max="1" />
    </clientOnly>
    <header class="container py-4 mx-auto bg-white shadow-sm">
      <div class="container flex flex-wrap items-center justify-center md:flex-no-wrap md:justify-between">

        <nuxt-link to="/" class="text-2xl font-bold text-blue-500 ">Lu Estilo</nuxt-link>


        <div class="relative flex w-full max-w-xl mt-3 md:mt-0">
          <input type="text" name="search" id="search"
                 class="w-full py-3 pl-3 pr-3 border border-r-0 border-primary rounded-l-md focus:outline-none"
                 placeholder="Pesquisar...">
          <button class="px-8 text-white transition bg-blue-500 border border-primary rounded-r-md hover:bg-blue-600 hover:text-gray-100">
            <span class="text-lg text-white  top-3">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
          </button>
        </div>

        <div class="flex items-center mt-3 space-x-4 md:mt-0">
          <a href="#" class="relative text-center text-gray-700 transition hover:text-primary">
            <div class="text-2xl">
              <i class="fa-solid fa-bag-shopping"></i>
            </div>
          </a>
          <a href="#" class="relative text-center text-gray-700 transition hover:text-primary">
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
