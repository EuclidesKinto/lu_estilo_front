<template>
  <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" :src="``">
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{{shirt}}</h1>
        <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import {shirts} from "@/store";
import ShirtDetail from "~/components/datail/ShirtDetail.vue";

export default Vue.extend({
  components: {ShirtDetail},
  data(){
    return {
      shirt: {}
    }
  },
  async asyncData({ params }){
    await shirts.show({id: params.id as any})
    console.log(shirts.$single)
    console.log('ok')
    this.shirt =  shirts.$single
  },
  // computed:{
  //   $shirt() {
  //     console.log(shirts.$single)
  //     console.log('ok')
  //     return shirts.$single
  //   }
  // }

})
</script>

<style scoped>

</style>
