<template>
  <div>
      jobs
      <div v-for="(job, index) in jobs" v-bind:key = 'index' class="job">
          {{job.id}}
          <div class="job-title">{{job.title}}</div>
          <!-- <div class="job-apply">{{job.url}}</div> -->
          <a :href="`${job.url}`">apply</a>
          <!-- <div class="job-domain">{{job.domain}}</div> -->
            <!-- {{job.domain != "" ? <a :href="`${job.domain}`">About the company</a> : <span>No Info</span>}} -->
            <!-- <a v-if="`${job.domain}`" :href="`${job.domain}`">About Company</a>
            <a v-else >No info</a> -->
          <div class="job-time">
            <div>{{job.time_ago}}</div>
          </div>
      </div>
      
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

<style scoped>
.job {
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 15px;
}
.job .job-title{
    font-size: 20px;
}
.job .job-time{
    display: flex;
    justify-content: flex-end;
    font-size: 13px;
    color: grey;
}
</style>