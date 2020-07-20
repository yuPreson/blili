<template>
    <div>
        <top-nav class="login">
            <div slot="center">blibli</div>
            <router-link to="" slot="right">去注册</router-link>
        </top-nav>
        <my-input label="用户名" placeholder="请输入用户名" type="text" ruler="[a-zA-Z0-9]{6,10}"
                  @sendMsg="res => form.username  = res"/>
        <my-input label="密码" placeholder="请输入密码" type="password" ruler="[a-zA-Z0-9]{6,10}"
                  @sendMsg="res=> form.password = res"/>
        <van-button color="#FC5F0F" block class="btn" :disabled="disabled" @click="loginBtn">登陆</van-button>

    </div>
</template>

<script>
  import TopNav from "@/components/TopNav";
  import MyInput from "@/components/MyInput";
  import {mapActions, mapState, mapMutations} from 'vuex'

  export default {
    name: "Login",
    components: {MyInput, TopNav},
    computed: {
      disabled() {
        let {username, password} = this.form;
        if (username.length >= 6 && password.length >= 6) {
          return false
        } else {
          return true
        }
      }
    },
    data() {
      return {
        form:{
          username: '111111',
          password: '111111'
        }
      }
    },
    methods: {
      ...mapActions(['loginIn']),
      ...mapMutations(['addUserInfo']),
     async loginBtn() {
       await this.addUserInfo(this.form);
      await this.loginIn();
      this.$router.push('/user-info')
      }
    }
  }
</script>

<style lang="less" scoped>
    .login {
        margin-bottom: 35%;
    }

    .btn {
        width: 90%;
        margin: 15px auto;
        height: 40px;
    }
</style>