<template>
  <div class="home-recomment">
    <div class="title">热销推荐</div>
    <ul class="list">
      <li class="item" :key="item.id" v-for="item in recommentList">
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
      data:function(){
        return {
          recommentList:[
            {
              id:1,
              imgUrl:"http://img1.qunarzz.com/sight/p0/1806/4f/4f448c94f180b36da3.water.jpg_200x200_9ef8867f.jpg",
              title:"36kr没想到未来城",
              price:200,
              desc:"测试描述语句测试描述语句测试描述语句测试描述语句测试描述语句"
            },
            {
              id:2,
              imgUrl:"http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg",
              title:"北京欢乐谷",
              price:158,
              desc:"测试描述语句测试描述语句测试描述语句测试描述语句测试描述语句"
            },
            {
              id:3,
              imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
              title:"故宫",
              price:320,
              desc:"测试描述语句测试描述语句测试描述语句测试描述语句测试描述语句"
            },
            {
              id:4,
              imgUrl:"http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg",
              title:"北京野生动物园",
              price:99,
              desc:"测试描述语句测试描述语句测试描述语句测试描述语句测试描述语句"
            },
            {
              id:5,
              imgUrl:"http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg",
              title:"古北水镇",
              price:263,
              desc:"测试描述语句测试描述语句测试描述语句测试描述语句测试描述语句"
            }
          ]
        }
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
         .ml(10);
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
