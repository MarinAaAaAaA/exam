<template>
  <div class="reg">
    <form action="action_page">
  <div class="container">
    <h1 class="reg__more">Регистрация</h1>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>
    <label for="psw"><b>Пароль</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
    <label for="psw-repeat"><b>Повторите пароль</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    <hr>
    <button type="submit" class="registerbtn"><b>Зарегистрироваться</b></button>


    
  </div>

  <div class="container signin">
    <p class="you"><b>Вы уже зарегистрированы? </b><router-link class="you" to="/auth"><b>Войти</b></router-link></p>
  </div>
</form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.reg{
  font-size: 20px;
  padding-top: 100px;
}
* {box-sizing: border-box}

/* Add padding to containers */
.container {
  display: flexbox;
  width: 300px;
  text-align: left;
}
.reg__more{
  margin-bottom: 50px;
  text-align: center;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid yellow;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
background-color: rgba(21, 10, 53, 0.946);
  color: rgb(255, 255, 255);
  padding: 16px 20px;
  margin: 8px 0;
  border: 2px solid yellow;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 20px;
}

.registerbtn:hover {
  opacity:1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: rgba(21, 10, 53, 0.946);
  text-align: center;
  color: rgb(255, 255, 255);
  border: 2px solid yellow;
 
}
.you{
  margin: 8px 0px;
}
</style>