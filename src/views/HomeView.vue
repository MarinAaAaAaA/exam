<template>
  <div class="home">
    <input class="home__more" v-model="searchCat" type="text" placeholder="Поиск вакансии">
    <ul class="cat_meow">
      <li v-for="(cat, index) in filteredCat" :key="index" @click="$router.push(`/${cat1.indexOf(cat)+1}`)">{{ cat }}</li>
    </ul>
    <proftabicaView
    :users_data="USERS"/>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import proftabicaView from '../components/tabica/proftabicaView.vue'
// @ is an alias to /src
export default {
  components: { proftabicaView },
  data() {
    return {
      title: '211-323',
      searchCat:'',
      cat: ['Инженер','Администратор','Бухгалтер','Редактор журнала','Маркетолог'],
      cat1: ['Инженер','Администратор','Бухгалтер','Редактор журнала','Маркетолог']

  }
},
methods:{
...mapActions([
  'GET_USERS_FROM_API'
])
},
mounted(){
  this.GET_USERS_FROM_API()
},
computed: {...mapGetters([
  'USERS'
]),
  filteredCat(){
    return this.cat.filter(cat =>{
      return cat.toUpperCase().indexOf(this.searchCat.toUpperCase()) !== -1
    })
  }
}
}

</script>

<style>
.cat_meow{
 text-align:left;
 font-size: 30px;
 margin-bottom: 50px;
}
.home{
  padding-top: 150px;
}
.home__more{
  border:2px solid yellow;
}

</style>
