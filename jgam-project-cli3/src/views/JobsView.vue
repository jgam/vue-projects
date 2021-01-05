<template>
  <div>
      jobs
      <div v-for="(job, index) in jobs" v-bind:key = 'index'>{{job}}</div>
  </div>
</template>

<script>
import {fetchList} from '../api/index';

export default {
    data(){
        return {
            jobs: []
        }
    },
    created(){
        fetchList('jobs').then(response => this.jobs = response.data).catch(err => console.error(err))
    }

}
</script>

<style>

</style>