<template>
  <div class="home-recomment">
    <div class="title">热销推荐</div>
    <ul class="list">
      <li class="item" :key="item.id" v-for="item in list">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="name">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
          <p class="price-btn">
            <span class="price">￥{{item.price}}</span>
            <button type="button" class="btn">查看详情</button>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default{
      name: "HomeRecomment",
      props:{
        list:Array
      }
    }
</script>

<style lang="stylus" scoped>
 .home-recomment
   font-size:0.28rem
   .title
     height: 0.8rem
     line-height: 0.8rem
     padding-left: 0.1rem
     background-color: #eeeeee
   .list
     .item
       display: flex
       padding: 0.3rem
       color:#959595
       border-bottom:1px solid #eee
       .item-img
         width: 1.6rem
         height: 1.6rem
       .item-info
         flex: 1
         padding-left:0.2rem
         .desc
           margin: 0.2rem 0
         .price-btn
           .price
             font-size: 0.26rem
             color: red
           .btn
                 float: right
                 padding: 0 0.3rem
                 height: 0.48rem
                 margin-top: 0.16rem
                 background-color:#00b4d4
                 color:white
                 border: 1px solid #00b4d4
</style>
