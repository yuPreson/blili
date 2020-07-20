<template>
    <van-field v-model="value" :type="type" :label="label" :placeholder="placeholder" @input="changeValue"/>
</template>

<script>
  export default {
    name: "MyInput",
    props:{
      type:{
        default:'password'
      },
      label:{
        require:true,
        type:String
      },
      placeholder:{
        default:'请输入'
      },
      ruler:{
        Type:String,
        default:''
      }
    },
    data(){
      return {
        value:''
      }
    },
    methods: {
      changeValue(){
        let falg = (new RegExp(this.ruler)).test(this.value);
        if(falg){
            this.$emit('sendMsg',this.value)
        }
      }
    }
  }
</script>

<style scoped>

</style>