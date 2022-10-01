<template>
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
         alt="$shirt.data.name"
         :src="image+$shirt.data.image">
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{{$shirt.data.name}}</h1>
      <p class="mb-8 leading-relaxed">R$ {{$shirt.data.price}}</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {shirts } from "@/store";
export default Vue.extend({
  name: "ShirtDetail",
  data(){
    return {
      image: 'http://localhost/storage/'
    }
  },
  computed: {
    $shirt() {
      console.log(shirts.$single)
      return shirts.$single
    }
  }
})
</script>

<style scoped>

</style>
