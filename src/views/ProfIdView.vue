<template>
    <div class="proff">
        <div >
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
.proff{
    padding-top: 100px;
    text-align:left;
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
.more__price{
    margin-top:50px ;
    text-align:left;
    font-size: 30px;
}


</style>
