<template>
<div  class="flex-col justify-center bg-white ">

  <section class="text-gray-600 body-font">
    <div class="container px-5 pt-10 mx-auto">
      <div class="flex flex-col text-center w-full mb-10">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">CONHEÇA NOSSAS ESTAMPAS</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Camisetas para uniformização, divulgação de marcas e realização de eventos é um recurso importante para o marketing.</p>

      </div>
      <div class="flex justify-center mt-0">
        <div class="inline-flex w-16 h-1 bg-blue-500 rounded-full"></div>
      </div>
      <div class="">
        <div class="mx-auto max-w-2xl py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-blue-500">Camisas</h2>

          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ShirtCard v-for="shirt in $shirts" :key="shirt.id" :shirt="shirt"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Contato/>
</div>
</template>

<script>
import {shirts} from "@/store";
import  ShirtCard from "@/components/Shirt/ShirtCard"

export default {
  name: "Home",
  components: {ShirtCard},
  computed:{
    $shirts() {
      console.log(shirts.$all)
      return shirts.$all
    }
  }

}
</script>

<style scoped>

</style>
