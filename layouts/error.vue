<template>
  <section class="text-gray-600 body-font min-h-screen flex">
    <div class="container mx-auto flex px-5  items-center justify-center flex-col">
      <h1 class="text-7xl font-extrabold pb-10">Error 404</h1>
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Desculpe...</h1>
        <p class="mb-8 leading-relaxed">Essa página não exite</p>
        <div class="flex justify-center">
          <nuxt-link to="/" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Home
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>

</style>
