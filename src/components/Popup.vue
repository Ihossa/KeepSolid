<template>
  <div class="parent-popup">
    <div class="popup" v-if = "seen">
      <form @submit.prevent = "newTable">
        <label>Title</label>
        <input type="text" name="titleTable" v-model="title">
        <label>Content</label>
        <textarea rows="7" v-model="content"></textarea>
        <button>Save</button>
        <button @click = "close">X</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    name:"popup",
    props:['editInf'],
    data() {
      return{
        title:this.editInf.title?this.editInf.title:"",
        seen: true,
        content: this.editInf.content?this.editInf.content:""
      }
    },

    methods: {
      newTable(){
        const infTable = {
          id: Date.now(),
          title: this.title,
          content: this.content
        }
        this.$emit('add', infTable, this.editInf);
        this.title = "";
        this.content = "";
      },
      close(){
        this.seen = false;
        this.$emit('closePop', this.seen);
      }
    }
  }
</script>
<style>
  .parent-popup{
    background: #000;
    height: 100%;
    opacity: 0.8;
    position: fixed;
    width: 100%;
    z-index: 100;
    top: 0;
    left: 0;
  }
  .popup{
    opacity: 1;
    position: fixed;
    height: 100%;
    padding: 3rem;
    background: gray;
  }
  .popup form{

  }
  .popup label{
    display: block;
    margin: 0.5rem 1rem;
    font-size: 1.3rem;

  }
  .popup input{
    width: 100%;
    line-height: 1.5rem;
    padding-left: 0.3rem;
    border-radius: 3rem;
    margin-bottom: 3rem;
  }
  .popup textarea{
    width: 100%;
    line-height: 1.5rem;
    padding-left: 0.3rem;
    border-radius: 1rem;
    margin-bottom: 3rem;
  }
  .popup button{
    display: block;
    width: 100%;
    font-size: 1.3rem;
    border-radius: 3rem;
    margin: 3rem 0;

  }

</style>