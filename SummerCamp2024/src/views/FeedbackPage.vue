<template>
    <div>
    <FeedbackForm @formSubmited="formSubmitedHandler($event)" />
    <FeedbackList :FeedbackList="this.FeedbackList"/>
    </div>
</template>

<script>
    import FeedbackForm from '@/components/FeedbackForm.vue';
    import FeedbackList from '@/components/FeedbackList.vue';
    import { myaxios } from '../axios';

    export default {
        components:{
            FeedbackForm,
            FeedbackList
        },
        data() {
            return {
                FeedbackList: []
            }
        },
        methods:{
            formSubmitedHandler(event){
                this.FeedbackList = event.newList
            },

            fetchFeedbackPosts(){
                myaxios.get("/feedback").then(
                    (response) => {
                        console.log(response.data.feedbackList)
                        this.FeedbackList = response.data.feedbackList
                    }
                )
            },
           

         },
         mounted () {
                this.fetchFeedbackPosts()
            },
    }
</script>

<style scoped>
div{
    background-color: hsla(95.42, 50%, 65.1%, 0.1);
}

</style>