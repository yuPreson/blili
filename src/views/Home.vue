<template>
    <div class="home">
        <login/>
    </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Login from "./user/login/Login";

  export default {
    name: 'Home',
    components: {
      Login,
      HelloWorld
    }
  }
</script>

<style lang="less" scoped>
    .div {
        width: 750px;
        height: 200px;
        background: skyblue;
    }
</style>