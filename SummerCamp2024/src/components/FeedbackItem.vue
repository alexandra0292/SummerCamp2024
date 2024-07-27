<template>
    <div class="feedback-container">
        <div class="feedback-left">
            <img src=""/>
            <p>{{ name }}</p>
        </div>


        <div class="feedback-right">
            <p>{{ experience }}</p>
            <div class="rating-container">
                <img class="rimg" v-for="i in rating" src="../assets/Img/star_changed.png"


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

.rating-container {
    display: flex;
    justify-content: start-end;
    margin-bottom: 15px;
    gap: 7px;
}

.rimg {
    max-width: 7%;
}

.feedback-container {
    background-color: #8cbc6a;
    padding: 15px;
    border-radius: 8px;
    max-width: 40%;
    margin-bottom:4%;
    margin-top:4%;
    font-size: 110%;
    margin-left: 2%;
}

.feedback-left {
    background-color: #c7eab1;
    max-width: 30%;
    display: flex;
    align-items: baseline;
    border-radius: 6px;
    margin-bottom: 4px;
    padding: 2px;

}

.feedback-right {
    background-color: #c7eab1;
    max-width: 70%;
    border-radius: 6px;
    padding: 1px;

}

</style>