<template>
  <div class="home-weekend">
    <div class="title">周末游</div>
    <ul class="list">
      <li class="item" v-for="item in list" :key="item.id">
        <div class="item-img"><img :src="item.imgUrl" alt=""></div>
        <div class="item-title">{{item.title}}</div>
        <div class="item-desc">{{item.desc}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: "HomeWeekend",
    props:{
      list:Array
    }
  }
</script>

<style lang="less" scoped>
  @import "~styles/common.less";
  .home-weekend{
    .fs(14);
    .title{
      .h(40);.lh(40);.pl(10);
      background-color: #eeeeee;
      color: @lightblack;
    }
    .list{
      .item-img{
        img{.w(375);.h(139);}
      }
      .item-title{
        color: #212121;
        .fs(13);.lh(30);.pl(15);
      }
      .item-desc{
        .pl(15);.fs(12);
        color: #616161;
        .pb(20);.mt(3);
      }
    }
  }
</style>
