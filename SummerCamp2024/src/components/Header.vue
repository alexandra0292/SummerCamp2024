<template>
    <div>
        <header style="background-color: #2B401D;">

<div class="container">

    <div class="header-content">

        <a href="#">
            <img src="../assets/Img/logo.png" alt="Logo">
        </a>

        <h1>Invatam Sanatos</h1>

        <nav>
            
            <ul>

                <li><a href="#">Info</a></li>
                <li><a href="#">Apps</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="feedback1.html">Feedback</a></li>

            </ul>

        </nav>

    </div>

</div>

</header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
body {
    margin: 0;
    font-family: "Arvo", serif;
}
header {
    background-color: #2B401D;
    color: white;
    padding: 5px 0;
    text-align: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: padding 0.3s ease;
}

header a img {
    height: 40px;
}

header nav ul {
    list-style-type: none;
    padding: 0;
}

header nav ul li {
    display: inline;
    margin: 0 15px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
}

.container {
    max-width: 1300px;
    margin: auto;
    position: relative;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

header h1 {
    margin: 0;
    font-size: 15px;
    flex: 1;
    text-align: left;
}

.logo-link {
    position: absolute;
    top: 10px;
    right: 20px;
}

.logo-link img {
    height: 40px;
}

nav ul {
    list-style-type: none;
    padding: 0;
    text-align: right;
}
nav ul li {
    display: inline;
    margin-right: 20px;
    text-transform: uppercase;
}
nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}
nav ul li a:hover {
    text-decoration: underline;
}
</style>