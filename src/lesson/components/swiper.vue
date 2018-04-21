<template>
  <div class="c-swiper">
    <swiper :options="swiperOption" ref="mySwiper" style="overflow: hidden">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in banners" :key="index"><a :href="item.target"
                                                                    :style="{backgroundImage:'url('+item.image+')'}"
                                                                    class="a"></a></swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
    <!--<div class="block" v-for="(item,index) in blocks">-->
    <!--<aside class="">{{item.caption}}</aside>-->
    <!--<div class=" col" v-for="(item,index) in item.items">-->
    <!--<div>{{item.title}}</div>-->
    <!--<a :href="item.target" :style="{backgroundImage:'url('+item.image+')'}" class="a"></a>-->
    <!--</div>-->
    <!--<a :href="item.more" class="more">More></a>-->
    <!--</div>-->
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import 'swiper/dist/css/swiper.css';

  export default {
    name: "swiper.vue",
    props: ['banners'],
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        // "banners": [
        //   {
        //     "image": "http://storage.yike.fm/lesson/cover/5a98b4e0437ab!cover",
        //     "target": "/lesson/detail?sn=xxx"
        //   },
        //   {
        //     "image": "http://storage.yike.fm/lesson/cover/5a98b4e0437ab!cover",
        //     "target": "/lesson/detail?sn=xxx"
        //   },
        //   {
        //     "image": "http://storage.yike.fm/lesson/cover/5a98b4e0437ab!cover",
        //     "target": "/lesson/detail?sn=xxx"
        //   },
        //   {
        //     "image": "http://storage.yike.fm/lesson/cover/5a98b4e0437ab!cover",
        //     "target": "/lesson/detail?sn=xxx"
        //   }
        // ],
        // "blocks": [
        //   {
        //     "caption": "增广见闻",
        //     "items": [
        //       {
        //         "image": "http://storage.yike.fm/lesson/cover/5a6c23a51ada2!cover",
        //         "target": "/lesson/detail?sn=xxx",
        //         "title": "正本清源区块链"
        //       }
        //     ],
        //     "more": "/lesson/list?tag=horizon"
        //   },
        //   {
        //     "caption": "使用技能",
        //     "items": [
        //       {
        //         "image": "http://storage.yike.fm/series/cover/5a23887b50cd4!cover",
        //         "target": "/lesson/detail?sn=xxx",
        //         "title": "不用写代码的爬虫课"
        //       }
        //     ],
        //     "more": "/lesson/list?tag=skills"
        //   }
        // ],
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: {
            delay: 1800
          },
          direction: 'horizontal',
          effect: "slide",
          loop: true,
          grabCursor: true,
          setWrapperSize: true,
          // autoHeight: true,
          // paginationType:"bullets",
          pagination: {
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet'
          },
          paginationClickable: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          // scrollbar:'.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true

        }
      }
    }

  }
</script>

<style scoped>
  .border {
    border: 1px #000 solid;
  }

  .c-swiper {
    width: 700px;
    margin: 0 auto;
    /*padding-top: 20px ;*/
  }

  .a {
    display: inline-block;
    width: 700px;
    height: 300px;
  }

  .block {
    display: flex;
    flex-flow: row nowrap;
    margin: 20px 0;
    text-align: center;
    background: #eee;
  }

  aside {
    flex: 0 0 30%;
    line-height: 300px;
  }

  .col {
    display: flex;
    flex-flow: column nowrap;
    line-height: 60px;
  }

  .col a {
    width: 400px;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .more {
    display: inline;
    height: 50px;
    margin: 215px 0 0 5%;
    text-decoration: none;
    color: #85D0FF;
  }
</style>
<style>
  .swiper-slide {
    height: 300px;
  }

  .swiper-pagination-bullet-active {
    background: #444444
  }
</style>
