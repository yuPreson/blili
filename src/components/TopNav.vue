<template>
    <div class="nav">
        <div class="left"><slot name="left"></slot></div>
        <div class="center">
            <slot name="center"></slot>
        </div>
       <div class="right">
           <slot name="right"></slot>
       </div>
    </div>
</template>

<script>
  export default {
    name: "TopNav"
  }
</script>

<style lang="less" scoped>
.nav{
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
    color: #fff;
    background:linear-gradient(135deg,rgba(255,139,1,1) 0%,rgba(254,80,2,1) 100%);
    .left{
        margin-left: 10px;
    }
    .right{
        margin-right: 10px;
        cursor: pointer;
    }
}
</style>