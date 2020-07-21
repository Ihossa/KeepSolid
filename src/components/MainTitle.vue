<template>
  <div class="mainTitle">
    <div class="head">
      <div class="email">{{mail}}</div>
      <button @click = "out">log Out</button>
    </div>
    <Popup 
    v-if = 'visPop'
    :editInf = "editInf"
    @add = "addNewTable"
    @closePop = "closePop"
     />
    <div class="container"><NewTable
    v-for="newtable in tableList" 
    :key="newtable.id" 
    :table-title = "newtable"
    @edit = "edit" 
    @remove = "remove"
    /></div>
    <button id = "pop" 
    @click="popNew"
    >+</button>
  </div>
</template>
<script>

  import NewTable from '@/components/NewTable'
  import Popup from '@/components/Popup'

  export default {
    name:"mainTitle",
    components: {
      Popup,
      NewTable
    },
    data() {
      return{
        mail: localStorage.getItem('mail'),
        visPop:false,
        tableList: localStorage.tableList ? JSON.parse(localStorage.tableList):[],
        editInf: {},
        pop: false
      }
    },
    methods: {
      addNewTable(newTable){
        this.tableList.push(newTable);
        this.saveToLocalStorage();
      },
      out(){
        localStorage.removeItem('mail');
        this.$router.push("/");
      },
      popNew(){
        this.editInf = {};
        this.visPop = true;
      },
      edit(id){
        const index = this.tableList.findIndex(e=> id === e.id);
        const inf = JSON.parse(localStorage.tableList)[index];
        this.editInf = inf;
        this.visPop = true;
        this.saveToLocalStorage();
      },
      remove(id){
        const index = this.tableList.findIndex(e=> id === e.id);
        this.tableList.splice(index, 1);
        this.saveToLocalStorage();
      },
      saveToLocalStorage(){
        localStorage.tableList = JSON.stringify(this.tableList);
      },
      closePop(seen){
        this.visPop = seen;
      }
    }
  }
</script>
<style>
  body{
    margin: 0;
    padding: 0;
  }

  .head{
    display: flex;
    align-items:center;
    background:lightgray;
    justify-content: space-around;
  }
  .head .email{
    margin: 1rem;
    font-size: 1rem;
    font-style: italic;
  }
  .head button{
    padding: 0.4rem;
    height: 70%;
    border-radius: 5rem;
  }
  #pop{
    font-size: 3rem;
    width: 4rem;
    border-radius: 10rem;
    outline: 0;
    position: absolute; 
    bottom: 2rem;
    right: 2rem;

  }
  .container{
    margin: 0 10rem;
  }

</style>