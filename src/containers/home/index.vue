<template>
    <div class="home-page">
        <div class="title">{{ msg }}</div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'home page'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "~styles/common.less";
     .home-page{
         .title{
           .w(375);.h(44);.fs(16);
           background-color:@blue;color: @white;
         }
     }
</style>
