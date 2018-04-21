<template>
  <div class="c-home">
    <!--<div class="info">-->
    <!--<p>-->
    <!--<span>span</span>-->
    <!--</p>-->
    <!--</div>-->
    <swiper :banners="banners"></swiper>
    <tab :list="list" class="tab"></tab>
    <markdown></markdown>
    <live class="live"></live>

    <!--<more :more="more" @showMore="showMore" class="fix"></more>-->
    <block :blocks="blocks"></block>
    <!--:class="{more:more}"-->
    <!--<fold></fold>-->
    <div class="bottom">{{msg}}</div>

  </div>
</template>

<script>
  import More from "../components/More.vue"
  import Swiper from "../components/swiper.vue"
  import Tab from "../components/tab.vue"
  import Fold from "../components/fold.vue"
  import Block from "../components/block.vue"
  import Markdown from "../components/Markdown.vue"
  import Live from "../components/Live.vue"

  export default {
    name: 'detail',
    components: {More, Swiper, Tab, Fold, Block, Markdown, Live},
    data() {
      return {
        more: true,
        msg: '',
        "banners": [
          {
            "image": "http://storage.yike.fm/lesson/cover/5a98b4e0437ab!cover",
            "target": "/lesson/detail?sn=xxx"
          },
          {
            "image": "http://storage.yike.fm/lesson/cover/5a98b4e0437ab!cover",
            "target": "/lesson/detail?sn=xxx"
          },
          {
            "image": "http://storage.yike.fm/lesson/cover/5a98b4e0437ab!cover",
            "target": "/lesson/detail?sn=xxx"
          },
          {
            "image": "http://storage.yike.fm/lesson/cover/5a98b4e0437ab!cover",
            "target": "/lesson/detail?sn=xxx"
          }
        ],
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
        "blocks": [
          {
            image: 'http://storage.yike.fm/lesson/cover/5a98b4e0437ab!cover',
            title: 'xx(标题)',
            teacher: 'xx（老师）',
            people: '报名人数',
            time: '开课时间',
            status: '课程状态'
          }
        ],
        list: [
          {
            title: '即将开课',
            teacher: "x",
            time: '1',
            people: '1'
          }, {
            title: '推荐课程',
            teacher: "xx",
            time: '2',
            people: '2'
          }, {
            title: '精品回放',
            teacher: "xxx",
            time: '3',
            people: '3'
          }, {
            title: '优质讲师',
            teacher: "xxxx",
            time: '4',
            people: '4'
          }
        ]
      }
    },
    methods: {
      showMore() {
        this.more = !this.more
        if (this.more === true) {
          this.msg = ''
        } else {
          this.msg = '--没有更多了--'
        }
      }
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
    width: 700px;
    height: 30px;
    margin: 10px auto;
    background: #fff;
    text-align: center;
    color: #0FC8C3;
  }

  .more {
    height: 486px;
    overflow: hidden;
  }
  .tab{
    z-index: 1;
  }
  .live {
    z-index: 0;
  }
</style>
