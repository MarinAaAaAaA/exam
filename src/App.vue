<template>
  <div id="app">
    

<header class="navbar-container">
    <div class="logo-container">
        <router-link to="/">Marina</router-link>
    </div>

    <div @click="menu" class="bars">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>

    <ul class="nav-items">
        <li class="nav-link"> <router-link to="/">Главная</router-link></li>
        <li class="nav-link"><router-link to="/about">О нас</router-link></li>
        <li class="nav-link"><router-link to="/programs">Программы</router-link></li>
        <li class="nav-link"><router-link to="/classes">Мастер-классы</router-link></li>
        <div class="login-register">
            <a href="#" class="button">Вход</a>
            <a href="#" class="button">Регистрация</a>
        </div>
    </ul>
  </header>

<div class="main">
   <router-view/> 
</div>  
  </div>
</template>

<script>
export default {
 methods: {
  menu() {
    let navItem = document.querySelector('.nav-items');


    navItem.classList.toggle('active');
  }
 }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@600;700&family=Poppins:wght@500&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif
}

body {
    background: rgba(25, 12, 64, 0.946);
}

a {
    text-decoration: none;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    height: 70px;
    align-items: center;
    background: rgba(21, 10, 53, 0.946);
    color: #fff;
    position:fixed;
    top:0;
    width: 100%;
}

.navbar-container .logo-container a {
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    font-family: 'Kanit', sans-serif;
}

.navbar-container .nav-items {
    display: flex;
    list-style-type: none;
    gap: 3rem;
    align-items: center;
}

.navbar-container .nav-items .nav-link a {
    color: #fff;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -ms-transition: 0.2s;
    -o-transition: 0.2s;
    padding: 10px;
    text-transform: uppercase;
}

.navbar-container .nav-items .nav-link:after {
    display: block;
    content: "";
    border-top: 2px solid rgb(254, 239, 73);
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
    -ms-transform: scaleX(0);
    -o-transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    -webkit-transition: transform 250ms ease-in-out;
    -moz-transition: transform 250ms ease-in-out;
    -ms-transition: transform 250ms ease-in-out;
    -o-transition: transform 250ms ease-in-out;
}

.navbar-container .nav-items .nav-link:hover:after {
    transform: scaleX(1);
    -webkit-transform: scaleX(1);
    -moz-transform: scaleX(1);
    -ms-transform: scaleX(1);
    -o-transform: scaleX(1);
} 

.navbar-container .nav-items .nav-link a:hover {
    filter: brightness(80%);
    -webkit-filter: brightness(80%);
}

.navbar-container .nav-items .login-register {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.navbar-container .nav-items .login-register .button {
    color: rgb(255, 255, 255);
    border: 2px solid rgb(254, 239, 73);
    padding: 5px 20px;
    border-radius:3px ;
    -webkit-border-radius:3px ;
    -moz-border-radius:3px ;
    -ms-border-radius:3px ;
    -o-border-radius:3px;
    text-transform: uppercase;
    transition: all ease-in 0.3s;
    -webkit-transition: all ease-in 0.3s;
    -moz-transition: all ease-in 0.3s;
    -ms-transition: all ease-in 0.3s;
    -o-transition: all ease-in 0.3s;
}

.navbar-container .nav-items .login-register .button:hover {
    background: rgb(254, 239, 73);
    color: black;
}

/* Now lets style the content of this design */

.main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 3rem;
    padding: 1rem;
    text-align: center;
}

/* Adjustment for ipad screens */

@media(max-width: 1100px) {
    .navbar-container {
        padding: 0 1rem;
    }

    .navbar-container .nav-items {
        gap: 0.1rem;
    }

    .navbar-container .nav-items .nav-link a, .navbar-container .nav-items .login-register .button {
        font-size: 0.9rem;
    }

}

/* adjustment for mobile phones */

@media(max-width: 800px) {
    .navbar-container .nav-items {
        flex-direction: column;
        position: fixed;
        top: 70px;
        width: 100vw;
        background: rgb(43, 43, 74);
        padding: 1rem 0;
        height: 100vh;
        z-index: 99;
        right: -100%; 
        transition: 0.2s ease-in;
        -webkit-transition: 0.2s ease-in;
        -moz-transition: 0.2s ease-in;
        -ms-transition: 0.2s ease-in;
        -o-transition: 0.2s ease-in;
}

.bars {
    height: auto;
    width: 22px;
    cursor: pointer;
}

.bars .bar {
    height: 2px;
    width: 100%;
    background: #fff;
    margin: 4px;
}

.navbar-container .nav-items {
    gap: 3rem;
}

.navbar-container .nav-items .login-register {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    width: 50%;
}

.navbar-container .nav-items .login-register .button {
    padding: 1rem 0;
}

.main {
    font-size: 2rem;
}
}

/* The active class below will be used to toggle the nav -items in JS */

.navbar-container .nav-items.active {
    right: 0;
}
</style>
