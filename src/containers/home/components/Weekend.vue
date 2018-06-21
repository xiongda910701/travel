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

<style lang="stylus" scoped>
  .home-weekend
    font-size:0.28rem
    .title
      height: 0.8rem
      line-height: 0.8rem
      padding-left: 0.2rem
      background-color: #eeeeee
    .list
      .item-img
        img
          width: 7.5rem
          height: 2.78rem
      .item-title
        color: #212121
        font-size: 0.26rem
        line-height: 0.6rem
        padding-left: 0.3rem
      .item-desc
        padding-left: 0.3rem
        padding-bottom: 0.4rem
        margin-top: 0.06rem
        font-size: 0.24rem
        color: #616161
</style>
