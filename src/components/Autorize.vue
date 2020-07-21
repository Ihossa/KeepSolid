<template>
  <div class="aut">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRji1aHPZw-G52iaRbNPlpARGUzqZZ6s5rIfw&usqp=CAU">
    <form @submit.prevent = "avtorization">
      <input type="text" name="mail" v-model="mail">
      <button>Enter</button><br>
      <span v-if='error'> неверный эмейл</span>
    </form>
  </div>
</template>
<script>

  export default {
    name:"aut",
    data() {
      return{
        mail:'',
        error: false
      }
    },
    methods: {
      avtorization(){
        const pattern  = /\w+(\.|\+|)@\w+\.\w+/;
        if(pattern.test(this.mail)){
          localStorage.mail = this.mail;
          this.error = false;
          this.$router.push("/mainTitle");

        }else{
          this.error = true

        }
      }
    }

  }
</script>
<style>
  .aut{
    display: flex;
    flex-direction: column;
    align-items:center;
    
  }
  .aut img{
    border-radius: 10rem;
    margin: 1rem;
    } 
  .aut span{
    margin: 1rem;
    color:red;
    
  }
</style>