<template>
  <div class="home-header">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
   export default {
        name: 'HomeSwiper',
        props:{
          list:Array
        },
        data () {
            return {
              swiperOption:{
                pagination:{
                  el:'.swiper-pagination'
                },
                loop:true,
                autoplay:true
              }
            }
        }
    }
</script>

<style lang="less">
  @import "~styles/common.less";
    .home-header{
      width: 100%;.h(125);
      background-color:#ececec;
      .swiper-img{width: 100%;.h(125);}
    }
</style>
