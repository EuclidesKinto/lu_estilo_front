<template>
<div  class="flex-col justify-center bg-lu-estilo-color ">

  <section class="text-gray-600 body-font">
    <div class="container px-5 pt-10 mx-auto">
      <div class="">
        <div class="max-w-2xl px-4 py-5 mx-auto sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">

          <div class="grid grid-cols-1 mt-3 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
import Banner from "../Banner.vue";


export default {
  name: "Home",
  components: { ShirtCard, Banner },
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
