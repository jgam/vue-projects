<template>
  <div>
      news
      <div class="news-list" v-for="(user, index) in this.$store.state.news" v-bind:key ="index">
          <div class="title">{{user.title}}</div>
          <div class="info">
            <div>comments: {{user.comments_count}}</div>
            <a v-bind:href="user.url">go to News</a>
          </div>
            <div>{{user.time_ago}} by <router-link v-bind:to="`/news/${user.user}`">{{user.user}}</router-link></div>
          
      </div>
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

<style scoped>
.news-list{
    padding: 10px;
}
.news-list .title{
    font-size: 20px;
}

.news-list .info{
    display: flex;
    justify-content: space-between;
}

</style>>
