<template>
  <div class="c-teacher">
    <div class="frm-teacher flex-row">
      <div class="avatar">
        <img :src="teacherData.teacher.avatar">
      </div>
      <div class="teacher-msg flex-col">
        <div class="name">{{teacherData.teacher.name}}</div>
        <div class="">{{teacherData.teacher.about}}</div>
      </div>
      <div class="focus flex-col">
        <p>关注</p>
      </div>
    </div>
    <div class="title">
      简介
    </div>
    <div class="markdown" v-html="showMarkdown">
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
        isActive: true
      }
    },
    methods: {
      active() {
        this.isActive = !this.isActive
      }
    },
    computed: {
      showMarkdown() {
        let that = this
        return markdown.toHTML(that.teacherData.introduce)
      }
    },
    created() {
    }
  }
</script>

<style scoped>
  p {
    margin: 0;
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

  .avatar img{
    width: 0.72rem;
    height: 0.72rem;
    border-radius: 0.72rem;
  }

  .name {
    width: 100%;
    font-size: 0.3rem;
  }

  .name + div {
    width: 4.38rem;
    font-size: 0.24rem;
    margin-top: 0.15rem;
    color: #808080;
    line-height: 0.36rem;
  }

  .focus {
    width: 1.2rem;
    height: 0.48rem;
    border: 1px solid #2A4EC4;
    border-radius: 0.24rem;
  }

  .focus p {
    position: relative;
    width: 0.7rem;
    padding-left: 0.5rem;
    font-size: 0.24rem;
    color: #2A4EC4;
    line-height: 0.48rem;
  }

  .focus p:before {
    content: '+';
    position: absolute;
    left: 0.22rem;
    width: 0.18rem;
    height: 0.18rem;
    color: #2A4EC4;
    border-radius: 0.01rem;
  }

  .markdown {
    font-size: 15px;
    line-height: 30px;
    color: #333333;
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
    background: #2F57DA;
    border-radius: 0.3rem;
    letter-spacing: 0.04rem;
    color: white;
    text-align: center;
    line-height: 0.6rem;
  }

  .c-teacher li {
    position: relative;
    margin-left: 0.31rem;
    letter-spacing: 0.01rem;
    list-style: none;
  }

  .c-teacher li:before {
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
