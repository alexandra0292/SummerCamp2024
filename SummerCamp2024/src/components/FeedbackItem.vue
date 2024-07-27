<template>
    <div class="feedback-container">
        <div class="feedback-left">
            <img src=""/>
            <p>{{ name }}</p>
        </div>


        <div class="feedback-right">
            <p>{{ experience }}</p>
            <div class="rating-container">
                <img v-for="i in rating" src="../assets/Img/star_changed.png"


            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
    props: {
        name: String,
        experience: String,
        rating: Number
    },
            
    }
</script>

<style scoped>

</style>