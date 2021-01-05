<template>
  <div>
      news
      <div v-for="(user, index) in this.news" v-bind:key ="index">{{user}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    created(){
        this.$store.dispatch('FETCH_NEWS', {input: 'news'})
    },
    computed:{
        ...mapGetters(['news'])
    },
    
}
</script>

<style>

</style>