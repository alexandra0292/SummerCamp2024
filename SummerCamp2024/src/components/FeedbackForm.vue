<template>
  <div>
    <div class="container">
      <h1>Formular Feedback</h1>
      <div method="post" class="form">
        <label for="nume">Nume utilizator:</label>
        <input type="text" v-model="nume" name="nume" required />

        <label for="experienta">Descrie experiența:</label>
        <textarea
          v-model="experienta"
          name="experienta"
          rows="4"
          required
        ></textarea>

        <div class="rating">
          <input
            @click="saveRating"
            type="radio"
            id="star1"
            name="rating"
            value="5"
          />
          <label for="star1" title="1 stele"></label>
          <input
            @click="saveRating"
            type="radio"
            id="star2"
            name="rating"
            value="4"
          />
          <label for="star2" title="2 stele"></label>
          <input
            @click="saveRating"
            type="radio"
            id="star3"
            name="rating"
            value="3"
          />
          <label for="star3" title="3 stele"></label>
          <input
            @click="saveRating"
            type="radio"
            id="star4"
            name="rating"
            value="2"
          />
          <label for="star4" title="4 stele"></label>
          <input
            @click="saveRating"
            type="radio"
            id="star5"
            name="rating"
            value="1"
          />
          <label for="star5" title="5 stea"></label>
        </div>

        <button @click="submitFormHandler" type="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { myaxios } from '@/axios';
export default {
    emits: ['formSubmited'],
  data() {
    return {
      experienta: "",
      nume: "",
      rating: "",
    };
  },
  methods: {
    saveRating(event) {
      console.log(event.target.id);
      console.log(event.target.value);
      this.rating = parseInt(event.target.value);
    },
    submitFormHandler(event){
                const newFeedback = {
                    experience: this.experienta,
                    name: this.nume,
                    rating: this.rating
                }



                myaxios.post("/feedback", newFeedback).then ((response) => {
                    console.log(response)
                    this.$emit('formSubmited', {newList : response.data.feedbackList })
                }) 
                
            },
  },
};
</script>

<style scoped>
body {
  font-family: "Arvo", serif;
  background-color: hsla(95.42, 50%, 65.1%, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color: #8cbc6a;
  padding: 60px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
  margin-top: 5%;
  margin-left: 33%;
}

.container label{
  font-size: 21px;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

.form {
  display: flex;
  flex-direction: column;
  background-color: #8cbc6a;
}

label {
  margin-bottom: 8px;
  text-align: left;
}

input[type="text"],
textarea {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}

.rating {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  gap: 7px;
  flex-direction: row-reverse;
}

.rating input[type="radio"] {
  display: none;
}

.rating label {
  width: 30px;
  height: 30px;
  background: url("../assets/Img/star.png") no-repeat center center;
  background-size: contain;
  cursor: pointer;
  transition: background 0.3s;
}

.rating input[type="radio"]:checked ~ label {
  background: url("../assets/Img/star_changed.png") no-repeat center center;
  background-size: contain;
}

.rating label:hover,
.rating label:hover ~ label {
  background: url("../assets/Img/star_changed.png") no-repeat center center;
  background-size: contain;
}

button {
  padding: 10px;
  background-color: #2b401d;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #79a05d;
}
</style>
