<template>
    <div>
        <section id="contacte">

<div class="col-50 contacte-info">

    <div class="formular-container">

        <div id="formular">
            
            <h3>Programeaza-te</h3>

            <input type="text" v-model="nume" placeholder="Nume" required><br>
            <input type="text" v-model="prenume" placeholder="Prenume" required><br>
            <input type="email" v-model="email" placeholder="Email" required><br>
            <textarea v-model="mesaj" rows="4" placeholder="Mesaj" required></textarea><br>
            <input type="submit" value="Transmite">

        </div>

    </div>

</div>

<img src="../assets/Img/cat-typing.jpg" alt="Cat Typing" class="cat-image">

</section>
    </div>
</template>

<script>
//import

    export default {
        data() {
            return {
                nume: "",
                prenume:"",
                email:"",
                mesaj:""

            }

        },
        methods:{
            submitFormHandler(event) {
                const newProgram = {
                    name: this.nume,
                    surname: this.prenume,
                    email: this.email,
                    message: this.mesaj
                }
                myaxios.post("/program", newProgram).then((response) =>{
                    console.log(response)
                })
            }
        }

    }

       
    
</script>

<style scoped>
#contacte {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

#contacte img {
    display: flex;
    justify-content: flex-end;
}

.col-50 {
    width: 50%;
}

.contacte-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.formular-container {
    width: 100%;
    max-width: 500px;
    background-color: #8cbc6a;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#formular h3 {
    margin-bottom: 20px;
    color: #2B401D;
}

#formular input[type="text"],
#formular input[type="email"],
#formular textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

#formular input[type="submit"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #2B401D;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#formular input[type="submit"]:hover {
    background-color: #345024;
}

.cat-image {
    border-radius: 10px;
    padding: 14px;
    max-width: 39%;
    background-color: #8cbc6a;
}

body{
    font-family: "Arvo", serif;
}
</style>