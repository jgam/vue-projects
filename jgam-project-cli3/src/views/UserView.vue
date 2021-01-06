<template>
    <div>
        <div>karma: {{userInfo.karma}}</div>
        <div>about: {{userInfo.about}}</div>
        <div>id: {{userInfo.id}}</div>
    </div>

</template>

<script>

export default {
    computed: {
        userInfo(){
            return this.$store.state.user;
        }
    },
    created(){
        const username = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', {input: username})

    }
}
</script>

<style>

</style>