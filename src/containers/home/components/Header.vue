<template>
    <div class="header">
      <div class="header-left"><i class="iconfont icon-back"></i></div>
      <div class="header-input">
        <i class="iconfont icon-search"></i>
        <span>请输入城市/景点/游玩主题</span>
      </div>
      <div class="header-right">
        <span>{{this.city}}</span>
        <i class="iconfont icon-select-down"></i>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
        props:{
          city:String
        },
        data () {
            return {
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .header
      display:flex
      height: 0.88rem
      line-height: 0.88rem
      font-size: 0.24rem
      background-color:#00b4d4
      color:white
      .header-left
        width: 0.64rem
        text-align: center
      .header-input
        flex: 1
        height: 0.52rem
        line-height: 0.52rem
        margin-top: 0.18rem
        padding-left: 0.16rem
        border-radius: 0.06rem
        background-color:white
        color:#959595
      .header-right
        width: 1.28rem
        text-align: center
</style>
