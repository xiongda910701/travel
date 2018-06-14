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
        name: 'HelloWorld',
        data () {
            return {
                msg: 'home page'
            }
        },
      components:{
        HomeHeader,HomeSwiper,HomeAd

      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "~styles/common.less";
</style>
