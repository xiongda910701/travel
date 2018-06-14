<template>
    <div class="home-ad">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <div class="item"  v-for="item in page" :key="item.id">
            <div class="item-img-box"><img class="item-img" :src="item.imgUrl" alt=""></div>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeAd',
        data () {
            return {
              swiperOption:{
                pagination:{
                  el:'.swiper-pagination'
                },
                loop:true
              },
                adList:[
                  {id:1,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',desc:'景点门票'},
                  {id:2,imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',desc:'必游榜单'},
                  {id:3,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',desc:'踏青赏花'},
                  {id:4,imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',desc:'一日游'},
                  {id:5,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',desc:'动植物园'},
                  {id:6,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',desc:'故宫'},
                  {id:7,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',desc:'主题乐园'},
                  {id:8,imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',desc:'Q+精选'},
                  {id:9,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',desc:'演出'},
                  {id:10,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',desc:'自然风光'},
                  {id:11,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',desc:'名胜古迹'},
                  {id:12,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/dd/cce1231836f10a02.png',desc:'周边游'},
                  {id:13,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',desc:'城市观光'},
                  {id:14,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',desc:'游乐场'}
                ]
            }
        },
      computed:{
        pages(){
          const pages=[];
          this.adList.forEach(function(item,index){
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
