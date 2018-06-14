<template>
  <div class="home-header">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueAwesomeSwiper from 'vue-awesome-swiper';
  import 'swiper/dist/css/swiper.css';
  Vue.use(VueAwesomeSwiper);

    export default {
        name: 'HomeSwiper',
        data () {
            return {
              swiperOption:{
                pagination:{
                  el:'.swiper-pagination'
                },
                loop:true,
                autoplay:true
              },
              swiperList:[
                {id:1,imgUrl:"http://img1.qunarzz.com/piao/fusion/1806/ab/4514055174ab3e02.jpg_750x200_274b2dd7.jpg"},
                {id:2,imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/c905d7879e288802.jpg_750x200_ed410d31.jpg"},
                {id:3,imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg"},
                {id:4,imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg"},
                {id:5,imgUrl:"http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg"}
              ]
            }
        }
    }
</script>

<style lang="less">
  @import "~styles/common.less";
    .home-header{
      width: 100%;.h(100);
      .swiper-img{
        width: 100%;
      }
      .swiper-pagination-bullet .swiper-pagination-bullet-active{
        opacity: 1;
        background-color: #fff!important;
      }
    }
</style>
