<template>
  <section class="text-gray-600 body-font">
    <ShirtDetail/>
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
  middleware: 'auth',
  async asyncData({ params }){
    await shirts.show({id: params.id as any})
    // console.log(shirts.$single)
    // console.log('ok')
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
