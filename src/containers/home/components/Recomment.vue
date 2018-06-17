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

<style lang="less" scoped>
 @import "~styles/common.less";
 .home-recomment{
   .fs(14);
   .title{
     .h(40);.lh(40);.pl(10);
     background-color: #eeeeee;
     color: @lightblack;
   }
   .list{
     .item{
       display: flex;.p(15);
       border-bottom:1px solid #eee;
       .item-img{
         .w(100);.h(100);
       }
       .item-info{
         .ml(10);width:100%;
         .name{.mt(8);}
         .desc{.lh(50);.textOverFlow(1);color: @lightblack;}
         .price-btn{
           .lh(40);
           .price{.fs(13);color: @red;}
           .btn{
             float: right;.h(24);.mt(8);
             background-color: @blue;
             color: @white;
             border: 1px solid @blue;
             .w(80);
           }
         }
       }
     }
   }
 }
</style>
