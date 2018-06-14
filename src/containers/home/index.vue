<template>
    <div class="home-page">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-ad></home-ad>
    </div>
</template>

<script>
  import HomeHeader from "./components/HomeHeader";
  import HomeSwiper from "./components/HomeSwiper";
  import HomeAd from "./components/HomeAd";
  export default {
      name: 'Home',
      components:{
        HomeHeader,HomeSwiper,HomeAd
      }
    }
</script>

<style scoped lang="less">
  @import "~styles/common.less";
</style>
