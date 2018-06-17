<template>
    <div class="home-ad">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <div class="item"  v-for="item in page" :key="item.id">
            <div class="item-img-box"><img class="item-img" :src="item.imgUrl" alt=""></div>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeAd',
        props:{
          list:Array
        },
        data () {
            return {
              swiperOption:{
                pagination:{
                  el:'.swiper-pagination'
                },
                loop:true
              }
            }
        },
      computed:{
        pages(){
          const pages=[];
          this.list.forEach(function(item,index){
            const page=Math.floor(index/8);
            if(!pages[page]){
              pages[page]=[];
            }
            pages[page].push(item);
          });
          return pages;
        }
      }
    }
</script>


<style lang="less" scoped>
  @import "~styles/common.less";
     .home-ad{
       .h(190);.fs(14);
       color:@lightblack;
       .item{
         width: 25%;.h(95);text-align: center;float:left;
         .item-img-box{
            text-align:center;
            .item-img{.w(55);.h(55);.mt(10);}
         }
       }
     }
</style>
