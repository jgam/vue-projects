<template>
  <div>
      news
      <div v-for="(user, index) in users" v-bind:key ="index">{{user}}</div>
  </div>
</template>

<script>
import {fetchList} from '../api/index';

export default {
    data() {
        return{
            users: []
        }
    },
    created(){
        fetchList('news').then(response => this.users = response.data).catch(function(error){console.log(error)});
    }
}
</script>

<style>

</style>