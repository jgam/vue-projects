<template>
  <div>
      ask
      <div v-for="(ask, index) in asks" v-bind:key="index">{{ask}}</div>
  </div>
</template>

<script>
import {fetchList} from '../api/index';

export default {
    data() {
        return {
            asks : []
        }
    },
    created(){
        fetchList('ask').then(response => this.asks = response.data).catch(err => console.log(err))
    }
}
</script>

<style>

</style>