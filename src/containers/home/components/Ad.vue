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


<style lang="stylus" scoped>
     .home-ad
       height: 3.8rem
       font-size: 0.28rem
       .item
         width: 25%
         height: 1.9rem
         text-align: center
         float:left
         color:#959595
         .item-img-box
            text-align:center
            .item-img
              width: 1.1rem
              height: 1.1rem
              margin-top: 0.2rem
</style>
