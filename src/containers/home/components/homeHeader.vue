<template>
    <div class="header">
      <div class="header-left"><i class="iconfont icon-back"></i></div>
      <div class="header-input">
        <i class="iconfont icon-search"></i>
        <span>请输入城市/景点/游玩主题</span>
      </div>
      <div class="header-right">
        <span>城市</span>
        <i class="iconfont icon-select-down"></i>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
        data () {
            return {
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "~styles/common.less";
    .header{
      .h(44);.lh(44);.fs(12);
      background-color: @blue;
      color:@white;
      display:flex;
      .header-left{
        .w(32);text-align: center;
      }
      .header-input{
        flex: 1;
        .h(26);.lh(26);.mt(9);.pl(8);
        border-radius: 3px;
        background-color: @white;
        color: @lightblack;
      }
      .header-right{
        .w(64);text-align: center;
      }
    }
</style>
