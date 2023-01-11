<template>
    <div class="proftabica">
        <div class="proftabica__header">
            <p @click="sortByName">Вакансия
                <i class='bx bx-chevrons-down'></i>
            </p>
            <p @click="sortByPrice">Зарплата
                <i class='bx bx-chevrons-down'></i>
            </p>
        </div>
        <div class="proftabicarow">
            <proftabicarow 
            v-for="row in numberingUsers" 
            :key="row.id" 
            :row_data="row" 
        />
        </div>
        <div class="proftabica__numbering">
            <div class="page" 
            v-for="page in pages" 
            :key="page"
            :class="{'page__sunshine':page===pageNumber}"
            @click="pageClick(page)"
            >{{ page }}
            </div>
        </div>
    </div>
</template>

<script>
import proftabicarow from "./proftabica-row.vue";
export default {
  name: "proftabicaView",
  components: {
    proftabicarow,
  },
  props: {
    users_data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      professionpage: 10,
      pageNumber:1
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.users_data.length / 10);
    },
    numberingUsers(){
        let from =(this.pageNumber-1)*this.professionpage;
        let to =from + this.professionpage;
        return this.users_data.slice(from,to);
    }
  },
  methods:{
    pageClick(page){
        this.pageNumber=page;
    },
    sortByName() {
            this.users_data.sort((a,b) => a.profession.localeCompare(b.profession))
        },

    sortByPrice(){
        this.users_data.sort((a,b) => a.price-b.price)
    }
  }
};
</script>
<style>
.proftabica {
  max-width: 900px;
  margin: 0 auto;
}
.proftabica__header {
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px yellow;
  flex-basis: 50%;
}
.proftabica__header p {
  flex-basis: 50%;
  text-align: left;
  margin-right: 30px;
  width: 400px;
  display: flex;
 cursor: pointer;
}
.proftabica__numbering{
    margin-top:30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.page{
    font-size: 10px;
    padding:10px;
    border: solid 1px yellow;
    margin-left: 5px;
}
.page:hover{
    background: rgba(0,0,0,0.5);
    cursor: pointer;
}
.page__sunshine{
    background: rgba(0,0,0,0.5);
    cursor: pointer;
}
</style>
