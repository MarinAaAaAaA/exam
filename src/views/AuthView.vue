<template>
  <div class="reg">
    <form action="action_page">
      <div class="container">
        <h1 class="reg__more">Авторизация</h1>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>
        <label for="psw"><b>Пароль</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
        <button type="submit" class="registerbtn"><b>Войти</b></button>
        
  
        <div class="container signin">
          <p class="you"><b>Вы не зарегистрированы? </b><router-link class="you" to="/registration"><b>Зарегистрироваться</b></router-link></p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style >



</style>