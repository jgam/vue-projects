<template>
  <div>
      <section>
          <!-- question detail -->
          <div>
              <div class="user-container">
                  <div class="icon">
                    <i class="fas fa-user"></i>
                  </div>
                  <div>
                    <router-link :to="`/news/${fetchedQuestion.user}`">
                      {{fetchedQuestion.user}}
                    </router-link>
                    <div> 
                        {{fetchedQuestion.time_ago}}
                    </div>
                </div>
              </div>
              
              <h2>{{fetchedQuestion.title}}</h2>
          </div>
      </section>
      <section>
          <!-- question comments -->
      </section>
      <div v-html="textHTML"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        textHTML: function(){
            return this.$store.state.question.content
        },
        ...mapGetters(['fetchedQuestion']),
    },
    created(){
        this.$store.dispatch('FETCH_QUESTION', {id: this.$route.params.id})
    }

}
</script>

<style scoped>
.user-container{
    display: flex;
    align-items:center;
}
.user-container .icon{
    font-size: 2.5rem;
    padding: 10px;
}

</style>