<template>
  <div>
      ask
      <div class="ask" v-for="(ask, index) in this.asks" v-bind:key="index">
          <div class="title">{{ask.title}}</div>
          <div class="info">
              <a v-bind:href="`item/${ask.id}`">go to Question</a>
              <div class="times">{{ask.time_ago}}</div>
          </div>
      </div>
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

<style scoped>
a{
    text-decoration: none;
    color: grey;
}
.ask{
    padding: 10px;
}

.ask .title{
    font-size: 20px
}

.ask .info{
    display: flex;
    justify-content: space-between;
}
</style>