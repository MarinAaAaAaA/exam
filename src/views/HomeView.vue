<template>
  <div class="home">
    <input v-model="searchCat" type="text" placeholder="Выбор преподавателей">
    <ul class="cat_meow">
      <li v-for="(cat, index) in filteredCat" :key="index">{{ cat }}</li>
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
      cat: ['Наталья Владимировна','Ирина Николаевна','Алина Зигмудовна','Фильза Муннировна']

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
</style>
