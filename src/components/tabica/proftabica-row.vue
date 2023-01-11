<template>
    <div class="proftabica-row">
        <div @click="$router.push(`/${row_data.id}`)" class="row row__profession">{{ row_data.profession }}</div>
        <div class="row row__price">{{ row_data.price }}</div>
    </div>
</template>

<script>
export default {
   name: "proftabica-row", 
   props:{
    row_data:{
        type:Object,
        default:()=>{
            return{}
        }
    }
   },
        data() {
            return {}
        },
    computed:{}
}
</script>

<style>
.proftabica-row{
    display: flex;
    justify-content: space-around;
}
.row{
    margin-top: 20px;
    flex-basis:50%;
    text-align: left;
    padding: 8px 16px;
    font-size:20px;
}
</style>
