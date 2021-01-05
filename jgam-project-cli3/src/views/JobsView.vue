<template>
  <div>
      jobs
      <div v-for="(job, index) in jobs" v-bind:key = 'index'>{{job}}</div>
  </div>
</template>

<script>
// import {fetchList} from '../api/index';
import {mapGetters} from 'vuex';

export default {
    created(){
        this.$store.dispatch('FETCH_NEWS', {input: 'jobs'})
    },
    computed:{
        ...mapGetters(['jobs'])
    }

}
</script>

<style>

</style>