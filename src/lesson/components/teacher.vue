<template>
  <div class="c-teacher" v-if="teacherData && teacherData.teacher">
    <div class="frm-teacher flex-row">
      <div class="avatar">{{teacherData.teacher.avatar}}</div>
      <div class="teacher-msg flex-col">
        <div class="name">{{teacherData.teacher.name}}</div>
        <div class="">{{teacherData.teacher.info}}</div>
      </div>
      <div class="focus flex-col">
        <p>关注</p>
      </div>
    </div>
    <div class="title">
      简介
    </div>
    <div class="markdown" id="teacher-msg">
      {{teacherData.teacher.introduce}}
    </div>
  </div>
</template>

<script>
  import {markdown} from 'markdown'

  export default {
    name: "teacher",
    props: ['teacherData'],
    components: {markdown},
    data() {
      return {
        isActive: true,
        msg:
          `####  在Shopify+facebook这个领域
* 我见过，有很多深谙流量获取之道的大牛，想要寻找利润突破口
* 我知道，有很多电商平台卖家，苦于政策变动， 产品专利等问题，被搞得七荤八素；
* 我明白，有很多人跃跃欲试自主创业，或是兼职做点属于自己的自由项目；
* 我听说，有很多人准备涉足Shopify领域，但是担心踩坑，赔钱；
* 我理解，以上所有
####  本课适宜人群
* 有独立学习能力且想要低成本创业的人；
* 对 Shopify+facebook 感兴趣的人；
* 对独立站选品及 Facebook 投放有疑惑的人；
####  报名须知
* 课程实践需要自备梯子；
* 如果有良好的英语水平会让沟通成本降低；
* 如果想听完课直接就能赚钱，还请不要报名，课程旨在引路及思路传递；
* 课程采用图文及语音的形式直播，点击开课时的链接即可进入课堂，课程内容可永久回听；
`
      }
    },
    // mounted: function () {
    //     let bw=document.body.scrollWidth
    //     let tm=document.getElementById('teacher-msg')
    //   if (bw<375) {
    //     tm.style.lineHeight=bw/375*23+'px'
    //   } else  {
    //     tm.style.lineHeight=bw/375*28+'px'
    //   }
    // },
    methods: {
      active() {
        this.isActive = !this.isActive
      }
    },
    computed: {
      showMarkdown() {
        let that = this
        that.msg = markdown.toHTML(that.msg)
        return that.msg
      }
    }
  }
</script>

<style scoped>
  p {
    margin: 0px;
  }

  .title {
    position: relative;
    height: 0.36rem;
    font-size: 16px;
    padding: 0.32rem 0.31rem;
    font-weight: bold;
    line-height: 0.36rem;
  }

  .title:before {
    content: '';
    position: absolute;
    left: 0;
    width: 0.1rem;
    height: 0.36rem;
    background: #2F57DA
  }

  .frm-teacher {
    justify-content: space-between;
    margin: 0.1rem 0.3rem;
    padding-bottom: 0.3rem;
    border-bottom: 0.01rem #DDDDDD solid;
  }

  .teacher-msg {
    align-items: left;
  }

  .avatar {
    width: 0.72rem;
    height: 0.7rem;
  }

  .name {
    width: 100%;
    font-size: 15px;
  }

  .name + div {
    width: 4.38rem;
    font-size: 12px;
    margin-top: 0.15rem;
    color: rgba(128, 128, 128, 1);
    line-height: 0.36rem;
  }

  .focus {
    width: 1.2rem;
    height: 0.48rem;
    border: 1px solid rgba(42, 78, 196, 1);
    border-radius: 0.24rem;
  }

  .focus p {
    position: relative;
    width: 0.7rem;
    padding-left: 0.5rem;
    font-size: 12px;
    color: rgba(42, 78, 196, 1);
    line-height: 0.48rem;
  }

  .focus p:before {
    content: '+';
    position: absolute;
    left: 0.22rem;
    width: 0.18rem;
    height: 0.18rem;
    color: rgba(42, 78, 196, 1);
    border-radius: 0.01rem;
  }

  .markdown {
    font-size: 15px;
    line-height: 30px;
    color: rgba(51, 51, 51, 1);
    margin: 0 0.31rem;
    padding-bottom: 0.3rem;
  }
</style>
<style>
  h1, h2, h3, h4, h5, ul, li {
    margin: 0;
    padding: 0;
  }

  h4:nth-child(3), h4:nth-child(5) {
    width: 2.9rem;
    height: 0.6rem;
    margin: 0.4rem auto 0.2rem auto;
    background: rgba(47, 87, 218, 1);
    border-radius: 0.3rem;
    letter-spacing: 0.04rem;
    color: white;
    text-align: center;
    line-height: 0.6rem;
  }

  li {
    position: relative;
    margin-left: 0.31rem;
    letter-spacing: 0.01rem;
    list-style: none;
  }

  li:before {
    content: '●';
    position: absolute;
    left: -0.3rem;
    font-size: 0.2rem;
    color: blue;
  }

  ul:nth-child(2) li:first-child, ul:nth-child(2) li:last-child {
    margin: 0;
  }

  ul:nth-child(2) li:first-child:before, ul:nth-child(2) li:last-child:before {
    content: '';
  }
</style>
