<template>
    <div>
        <FeedbackItem v-for="f in FeedbackList" :name="f.name" :experience="f.experience" :rating="f.rating" />
    </div>
</template>

<script>
import FeedbackItem from './FeedbackItem.vue';
    export default {
        props:{
            FeedbackList: Array
        },
         components: {FeedbackItem},
         
    }
</script>

<style lang="scss" scoped>

</style>