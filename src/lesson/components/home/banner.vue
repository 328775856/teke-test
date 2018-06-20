<template>
  <div class="c-banner">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-no-swiping">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in data.list" :key="index" class="ani" swiper-animate-effect="shutter2"><img
        :src="item.profile.cover"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    name: 'lesson-home-banner',
    props: ['data'],
    components: {swiper, swiperSlide},
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          simulateTouch: false, //  禁止鼠标模拟
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: {
            delay: 2500,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          onlyExternal: true,
          spaceBetween: 20,
          centeredSlides: true,
          slidesPerView: 'auto',
          loop: true,
          effect: '"slide"',
          direction: 'horizontal',
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created() {
    },
    mounted() {
   //   this.animete()
      // current swiper instance
      console.log('this is current swiper instance object', this.swiper)
      // this.swiper.width = 750 + 'px'
      // alert(this.swiper.width)
      // let list = document.querySelectorAll('.swiper-slide')
      // //    alert(list[0].style.width)
      // list[0].style.width = '100px'
    },
    methods: {
      // animete() {
      //   setInterval(() => {
      //     let slide = document.querySelector('.swiper-slide-active')
      //    // let slideN = document.querySelector('.swiper-slide-next')
      //     slide.style.transform = 'scale(1.2)'
      //     slide.style.zIndex = 11
      //     // alert(slide.querySelector('img').src)
      //   }, 3000)
      //   let slideP = document.querySelector('.swiper-slide-prev')
      //   slideP.style.transform = 'scale(1)'
      // }
    }
  }
</script>

<style scoped>
  div {
    color: #333
  }

  .c-home .info {
    color: #f00
  }

  .c-home p {
    color: #0f0
  }

  .span {
    color: #00f
  }

  .bottom {
    width: 7rem;
    height: .3rem;
    margin: .1rem auto;
    background: #fff;
    text-align: center;
    color: #0FC8C3;
  }

  .more {
    height: 4.86rem;
    overflow: hidden;
  }

  .tab {
    z-index: 1;
  }

  .live {
    z-index: 0;
  }

  img {
    width: 100%;
    height: 3rem;
    border-top-left-radius: .08rem;
    border-top-right-radius: .08rem;
  }

  .swiper-container {
    height: 3rem;
    padding: .30rem 0 .42rem 0;
    background: linear-gradient(0deg, #999, #E5E5E5);
  }

  .swiper-slide {
    height: 3rem;
    width: 5.3rem !important;
  }

  .swiper-slide-next {
    /*animation: change 1.5s ease-in 2s;*/
    /*transition: transform 2s linear;*/
  }

  .swiper-pagination {
    height: .42rem;
    line-height: .42rem;
    background: white;
    bottom: 0;
  }

  .swiper-button-next, .swiper-button-prev {
    background-image: none;
  }

  @-webkit-keyframes shutter2 {
    from {
      top: 100%;
    }
    to {
      top: 0;
    }
  }

  .shutter2 {
    -webkit-animation: shutter2 0.5s forwards;
    animation: shutter2 0.5s forwards;
  }

  @keyframes change {
    0% {
      transform: scale(1);
    }
    10% {
      z-index: 11;
      transform: scale(1.1);
    }
    20% {
      transform: scale(1.2);
    }
    /*30% {*/
    /*transform: rotate(5deg);*/
    /*}*/
    /*40% {*/
    /*transform: rotate(0deg);*/
    /*}*/
    /*60% {*/
    /*transform: rotate(-5deg);*/
    /*}*/
    /*80% {*/
    /*transform: rotateY(0deg);*/
    /*}*/
    100% {
      z-index: 11;
      transform: scale(1.2);
    }
  }
</style>
