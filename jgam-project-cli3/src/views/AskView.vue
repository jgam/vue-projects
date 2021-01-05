<template>
  <div>
      ask
      <div v-for="(ask, index) in this.asks" v-bind:key="index">{{ask}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    created(){
        this.$store.dispatch('FETCH_NEWS', {input: 'ask'})
    },
    computed:{
        ...mapGetters(['asks'])
    }
}
</script>

<style>

</style>