<template>
    <div>
        <section id="galerie" class="stilizare-sectiune">

<h1> Aplicatii </h1>

<div class="container-galerie">

    <a href="https://www.superbyte.site/studybunny">

        <img src="../assets/Img/studybunny.png" alt="Poza 1">
        <h3> Study Bunny </h3>

    </a>

    <a href="https://pomofocus.io/">

        <img src="../assets/Img/PomodoroTimer.png" alt="Poza 2">
        <h3> PomodoroTimer </h3>
    
    </a>

    <a href="https://flashcards.world/">
        
        <img src="../assets/Img/Flashcards.png" alt="Poza 3">
        <h3> Flashcards </h3>
    
    </a>

</div>

</section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

#galerie {
    text-align: center;
    padding: 40px 20px;
}

#galerie h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #2B401D;
}

.container-galerie {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.container-galerie a {
    display: block;
    width: calc(33.333% - 20px);
    max-width: 300px;
    margin: 10px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.container-galerie a:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.container-galerie img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
}

.stilizare-sectiune{
    padding: 0.5px 40px 40px;
    text-align: center;
}

</style>