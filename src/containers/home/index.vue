<template>
    <div class="home-page">
      <home-header></home-header>
      <home-swiper></home-swiper>
    </div>
</template>

<script>
  import HomeHeader from "./components/HomeHeader";
  import HomeSwiper from "./components/HomeSwiper";

  export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'home page'
            }
        },
      components:{
        HomeHeader,HomeSwiper

      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "~styles/common.less";
</style>
