<template>
  <div>
    <h1>登录界面</h1>
    <div>
      账号:<input type="text" v-model="userName"/><br>
      密码:<input type="text" v-model="userPass"/><br>
      <button v-on:click="greet">Greet</button>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        userName:'',
        userPass:''
      }
    },
    methods:{
      greet(){
        this.$axios({
          method:'post',
          url:'http://127.0.0.1:8090/main/loginIn',
          data:this.qs.stringify({    //这里是发送给后台的数据
            userName:this.userName,
            userPass:this.userPass
          })
        })
        .then((response) => {
          if(response.data == 'success'){
            this.$router.push({name: 'Success'});
          }
          if(response.data == 'error'){
            this.$router.push({name: 'Error'});
          }
        })
        .catch(function (error) {
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped>

</style>
