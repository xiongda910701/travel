<template>
  <div class="home-page">
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-ad :list="adList"></home-ad>
    <home-recomment :list="recommentList"></home-recomment>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import Axios from "@/util/util.jsx"
  import HomeHeader from "./components/Header";
  import HomeSwiper from "./components/Swiper";
  import HomeAd from "./components/Ad";
  import HomeRecomment from "./components/Recomment";
  import HomeWeekend from "./components/Weekend"

  export default {
    name: 'Home',
    data: function () {
         return{
           city:"",
           swiperList:[],
           adList:[],
           recommentList:[],
           weekendList:[]
         }
    },
    components: {
      HomeHeader, HomeSwiper, HomeAd, HomeRecomment, HomeWeekend
    },
    mounted(){
      this.getHomeData();
    },
    methods:{
      getHomeData:function(){
        var url="/api/index.json";
        var params={};
        Axios.doAxiosGet(url,params,(data)=>{
          console.log(data);
        this.city=data.city;
        this.swiperList=data.swiperList;
        this.adList=data.iconList;
        this.recommentList=data.recommendList;
        this.weekendList=data.weekendList;
        });
      }
    },
    computed:{

    }
  }
</script>

<style scoped lang="stylus">

</style>
