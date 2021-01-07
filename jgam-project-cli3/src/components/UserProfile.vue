<template>
  <div class="user-container">
                  <div class="icon">
                    <i class="fas fa-user"></i>
                  </div>
                  <div>
                    <router-link :to="`/news/${fetchedQuestion.user}`">
                      <slot name="username">
                        {{fetchedQuestion.user}}
                      </slot>
                    </router-link>
                    <div class="time">
                        <slot name="time">
                            {{fetchedQuestion.time_ago}}
                        </slot>
                    </div>
                </div>
              </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed:{
        ...mapGetters(['fetchedQuestion'])
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