<template>
  <div class="c-teacher">
    <div class="tab">
      <div :class="{active:isActive}" @click="active">课程</div>
      <div :class="{active:!isActive}" @click="active">目录</div>
    </div>
    <div class="title">
      讲师
    </div>
    <div class="frm-teacher">
      <div class="avatar">1</div>
      <div class="teacher">
        <div class="name">伪90后畅唱</div>
        <div class="">简单又有思想，真诚中流露着狡猾，看…</div>
      </div>
      <div class="focus">
        <p>关注</p>
      </div>
    </div>
    <div class="title">
      简介
    </div>
    <div class="teacher-msg" id="teacher-msg" v-html="msg">
      {{showMarkdown}}
    </div>
  </div>
</template>

<script>
  import {markdown} from 'markdown'

  export default {
    name: "teacher-introduce.vue",
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
    mounted: function () {
        let bw=document.body.scrollWidth
        let tm=document.getElementById('teacher-msg')
      if (bw<375) {
        tm.style.lineHeight=bw/375*24+'px'
      } else  {
        tm.style.lineHeight=bw/375*29+'px'
      }
    },
    methods: {
      active() {
        this.isActive = !this.isActive
      }
    },
    computed: {
      showMarkdown () {
        let that=this
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

  .c-teacher {
    height: 18.36rem;
  }

  .tab {
    position: sticky;
    top: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    width: 7.5rem;
    height: 1rem;
    border-bottom: 0.01rem #DDDDDD solid;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    background: #fff;
  }

  .tab div {
    position: relative;
    flex: 1;
    height: 1rem;
    line-height: 1rem;
    cursor: pointer;
  }

  .active {
    color: #2F57DA;
  }

  .active:after {
    content: '';
    position: absolute;
    left: 1.34rem;
    top: 0.96rem;
    width: 1rem;
    height: 0.04rem;
    background: #2F57DA;
    border-radius: 0.02rem;
  }

  .title {
    width: 7.5rem;
    height: 0.36rem;
    font-size: 0.32rem;
    padding: 0.32rem 0;
    padding-left: 0.31rem;
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
    display: flex;
    flex-flow: row nowrap;
    height: 0.7rem;
    margin: 0.1rem 0.3rem;
    padding-bottom: 0.3rem;
    border-bottom: 0.01rem #DDDDDD solid;
  }

  .avatar {
    width: 0.72rem;
    height: 0.7rem;
  }

  .teacher {
    display: flex;
    flex-direction: column;
    width: 4.98rem;
  }

  .name {
    width: 1.56rem;
    height: 0.28rem;
    font-size: 0.3rem;
  }

  .name + div {
    width: 4.38rem;
    height: 0.24rem;
    font-size: 0.24rem;
    margin-top: 0.15rem;
    color: rgba(128, 128, 128, 1);
    line-height: 0.36rem;
  }

  .focus {
    width: 1.2rem;
    height: 0.48rem;
    border: 1px solid rgba(42, 78, 196, 1);
    border-radius: 0.24rem;
    font-size: 0.24rem;
  }

  .focus p {
    position: relative;
    width: 0.7rem;
    height: 0.23rem;
    padding-left: 0.52rem;
    font-size: 0.23rem;
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

  .teacher-msg {
    width:6.72rem;
    height:14rem;
    font-size:15px;
    line-height:30px;
    color:rgba(51,51,51,1);
    margin: 0 0.31rem;
  }
</style>
<style>
  h1,h2,h3,h4,h5,ul,li{
    margin: 0;
    padding: 0;
  }

  h4:nth-child(3),h4:nth-child(5){
    width:2.9rem;
    height:0.6rem;
    margin: 0.4rem auto 0.2rem auto;
    background:rgba(47,87,218,1);
    border-radius: 0.3rem ;
    color: white;
    text-align: center;
    line-height: 0.6rem;
  }
  li{
    margin-left: 0.31rem;
    list-style: none;
  }
  li:before{
    content: '●';
    position: absolute;
    left: 0.41rem;
    font-size: 0.2rem;
    color: blue;
  }
  ul:nth-child(2) li:first-child, ul:nth-child(2) li:last-child{
    margin: 0;
  }
  ul:nth-child(2) li:first-child:before, ul:nth-child(2) li:last-child:before{
    content: '';
  }
</style>
