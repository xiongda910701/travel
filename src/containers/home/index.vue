<template>
    <div class="home-page">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-ad></home-ad>
      <home-recomment></home-recomment>
    </div>
</template>

<script>
  import HomeHeader from "./components/HomeHeader";
  import HomeSwiper from "./components/HomeSwiper";
  import HomeAd from "./components/HomeAd";
  import HomeRecomment from "./components/HomeRecomment";

  export default {
      name: 'Home',
      components:{
        HomeHeader,HomeSwiper,HomeAd,HomeRecomment
      }
    }
</script>

<style scoped lang="less">
  @import "~styles/common.less";
</style>
