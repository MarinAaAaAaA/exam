<template>
    <div class="proff">
        <div class="work">
            Вакансия:
        {{article.profession}}
        </div>
        <div>
    
            <img class="catalog-item__image" :src=" require('../assets/images/' + article.photo) " alt="img">
        </div>
        <div class="more">
            Описание:
            {{article.text}}
        </div>
        <div class="more__price">
            Заработная плата:
        {{article.price}}
        </div>
        <div class="more__price">
            Комментарии о компании:
        {{article.reviews}}
        </div>
        <div class="container signin">
            <p class="you"><router-link class="you" to="/auth"><b>Отправить резюме</b></router-link></p>
        </div>
       
    <div class="form-at">
        <div class="validate-input-at w-50" data-validate="Обязательное поле">
            <input class="input-at" type="text" name="name-at" placeholder="Ваше имя" />
            <span class="focus-input-at"></span>
        </div>
        <div class="validate-input-at w-50" data-validate="Обязательное поле">
            <input class="input-at" type="text" name="email-at" placeholder="Ваш телефон или email" />
            <span class="focus-input-at"></span>
        </div>
        <div class="validate-input-at" data-validate="Обязательное поле">
            <textarea class="input-at" name="message-at" placeholder="Ваше сообщение"></textarea>
            <span class="focus-input-at"></span>
        </div>
        <input checked="checked" class="input-at" id="checkbox-at" type="checkbox" name="checkbox-at" onchange="document.getElementById('submit-at').disabled = !this.checked;" />
        <label for="checkbox-at">
            Настоящим подтверждаю, что я ознакомлен и согласен с <a href="#rules">пользовательским соглашением</a>
        </label> 
        <input type="hidden" name="subject-at" value="Тема формы">
        <div class="container signin">
            <p class="you"><router-link class="you" to="/auth"><b>Добавить комментарий</b></router-link></p>
        </div>
    </div>
    <div class="result-at"></div> 
    
</div>



        
   
   
    

</template>

<script>
import { mapGetters } from 'vuex'

export default {
computed: {...mapGetters([
  'USERS'
]),

    article: function(){
       return this.USERS.find((element) => {
        return element.id==this.$route.params.id
        })
    }
  
// updated(){
//     console.log('params',this.$route.params.namecar)
// }
}
}
</script>


<style >    
.form-at {
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box; 
    overflow: hidden;
    font-size: 0;  
    letter-spacing: 0;    
    background: #f9f9f9;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 10px 18px rgba(0,0,0,0.2);
}
.form-at * {
    box-sizing: border-box;
    font-family: Verdana, sans-serif;    
}
.validate-input-at,
.no-validate-input-at {
    width: 100%;
    position: relative;
    background-color: #fff;
    border: 2px solid #BFE2FF;
    border-radius: 2px;
    margin-bottom: 20px;
}

.input-at {
    display: block;
    width: 100%;
    background: transparent;
    color: #000;
}
input.input-at {
    height: 50px;
    padding: 0 20px 0 20px;
    font-size: 16px;
    outline: none;
    border: none;  
}
textarea.input-at {
    min-height: 170px;
    padding: 18px 20px;
    font-size: 16px;
    line-height: 22px;
    outline: none;
    border: none;
    resize: none;
}
textarea.input-at:focus, 
input.input-at:focus {
    border-color: transparent;
}
.focus-input-at {
    position: absolute;
    display: block;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    pointer-events: none;
    border: 2px solid #337AB7;
    border-radius: 2px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s;
    transform: scaleX(1.1) scaleY(1.3);
}
.input-at:focus + .focus-input-at {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
}
.form-at-btn {
    position: relative;
    display: block;
    padding: 0 40px;
    height: 50px;
    background-color: #337AB7;
    border-radius: 2px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    line-height: 1.2;
    transition: all 0.4s;
    margin: 0 auto;
    outline: none;
    border: none;
    cursor: pointer;        
}
.form-at-btn:hover {
    background-color: #333333;
}
.form-at-btn[disabled] {
    opacity: .6;
    cursor: not-allowed;
}
.alert-validate::before {
    content: attr(data-validate);
    position: absolute;
    max-width: 70%;
    background-color: #fff;
    border: 1px solid #c80000;
    border-radius: 2px;
    padding: 4px 25px 4px 10px;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
    pointer-events: none;
    color: #c80000;
    font-size: 13px;
    line-height: 1.4;
    text-align: left;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s;
}

.alert-validate:hover:before {
    visibility: visible;
    opacity: 1;
}

.form-at input[type=checkbox] {
    display:none;
}
.form-at input[type=checkbox] + label {
    display: block;
    position: relative;
    margin: 0 0 20px 34px;
    font-size: 13px;
    line-height: 24px;
    color: #333333;
}
.form-at input[type=checkbox] + label:before {
    box-sizing: border-box;
    position: absolute;
    content: '';
    width: 26px;
    height: 26px;
    line-height: 22px;
    left: -34px;
    border: 2px solid #BFE2FF;
    border-radius: 2px;
}
.form-at input[type=checkbox]:checked + label:before{
    content: '\2714';
    color:#337AB7;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    border: 2px solid #337AB7;
}
@media (max-width: 768px) {
    .validate-input-at.w-50 {
        width: 100%;
    }
    .validate-input-at.w-50:first-child {
        margin-right: 0;
    }
    .alert-validate::before {
        visibility: visible;
        opacity: 1;
    }
}
.proff{
    padding-top: 100px;
    text-align:left;
    font-size: 2px;
    width: 900px;
}
.work{
    text-decoration: underline yellow;
    font-size: 30px;
}

.catalog-item__image{
    width: 500px;
    margin-top: 50px;
    text-align:left;

}
.more{
    margin-top: 50px;
    text-align:left;
    font-size: 30px;

}
.container {
margin-top: 30px ;
 font-size: 20px;
}
.more__price{
    margin-top:50px ;
    text-align:left;
    font-size: 30px;
}


</style>
