<template>
  <div>
      news
      <div class="news-list" v-for="(user, index) in listItems" v-bind:key ="index">
          <div class="points">
              <div v-if="user.points" class="points-details">{{user.points}}</div>
              <div v-else class="points-details">N/A</div>

        </div>
        <div>
            <div class="title" >
                <a v-if="user.domain" v-bind:href="user.url">{{user.title}}</a>
                <a v-else v-bind:href="`item/${user.id}`">{{user.title}}</a>

            </div>
            <div class="second-info">
                {{user.time_ago}} by <router-link v-bind:to="`/news/${user.user}`" class="ssecond-info">{{user.user}}</router-link>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex';

export default {
    created(){
            const name = this.$route.name;
            console.log(this.$route.name)
        if(name ==="news"){
            this.$store.dispatch('FETCH_NEWS', {input: 'news'})
        }else if(name ==="ask"){
            this.$store.dispatch('FETCH_NEWS', {input: 'ask'})
        }
        // else if(name ==="jobs"){
        //     this.$store.dispatch('FETCH_NEWS', {input: 'jobs'})

        // }
        else{
            console.log('something wrong')
        }
        
    },
    computed:{
        listItems(){
            return this.$store.state.list;
            // const name = this.$route.name;
            // console.log(this.$route)
            // if(name === "news"){
            //     console.log('got in here list item')
            //     return this.$store.state.news;
            // }else if(name ==="ask"){
            //     return this.$store.state.asks
            // }else{
            //     return []
            // }
        }
    },
    
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: #35495e;
}

.news-list{
    padding: 10px;
    border-bottom: 1px solid #eee;
    display:flex;
    align-items:center;
}
.news-list .title{
    font-size: 20px;
}

.news-list .info{
    display: flex;
    justify-content: space-between;
}

.news-list .second-info{
    color: grey;
}

.news-list .second-info .ssecond-info{
    color: grey;
}

.news-list .points{
    font-size: 20px;
    width: 80px;
    height: 60px;
    display: flex;
    align-items:center;
    justify-content: center;
    color:#42b883;
}



</style>