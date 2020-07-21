<template>
  <div class="newtable">
    <div class="table">
      <div class="head">
        <button class="table-btn" @click = "edit">+</button>
        <button class="table-btn" @click = "remove">-</button>
      </div>
      <div class="context">
        <p>{{tableTitle.title}}</p>
        <p>{{tableTitle.content}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"newtable",
    props:['table-title'],
    methods: {
      edit(){
        this.$emit(`edit`, this.tableTitle.id);
      },
      remove(){
        this.$emit(`remove`, this.tableTitle.id);
      }
    }
  }
</script>
<style>
  .newtable {
    display: inline-block;
  }
  .table{
    margin: 3rem 4rem;
  }
  .table .head{
    background: gray;
    display: flex;
    justify-content:flex-end;
    padding-left:5rem; 
    width: auto;
  }
  .table-btn{
    width: 2rem;
    margin: 0.2rem;
  }
  .context{
    background: lightgray;
  }

</style>