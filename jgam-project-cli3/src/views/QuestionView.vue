<template>
  <div>
      <section>
          <!-- question detail -->
          <div>
              <user-profile></user-profile>
              
              <h2>{{question.title}}</h2>
          </div>
      </section>
      <section>
          <!-- question comments -->
      </section>
      <div v-html="question.content"></div>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
    computed: {
        question: function(){
            return this.$store.state.question
        },
    },
    created(){
        this.$store.dispatch('FETCH_QUESTION', {id: this.$route.params.id})
    },
    components: {
        UserProfile
    }

}
</script>


<style scoped>
</style>