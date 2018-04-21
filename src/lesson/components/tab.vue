<template>
  <div class="c-tab">
    <ul>
      <li @click="show=index" :class="{active:show==index}" v-for="(item,index) in list" :key="item.index">
        {{item.title}}
      </li>
    </ul>
    <div class="content" v-if="show==index" v-for="(item,index) in list" :key="item.index">
      <div class="left">
        <p>{{item.teacher}}(老师)</p>
        <p>一句话介绍</p>
      </div>
      <div class="right">
        <p>{{item.time}}小时后开课</p>
        <p>{{item.people}}人已报名</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab.vue",
    props: ['list'],
    data() {
      return {
        show: 0
      }
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0;
  }

  .active {
    background: #20a3ff;
  }

  .c-tab {
    position: sticky;
    top: 0px;
    margin: 0 auto;
    text-align: center;
  }

  div {
    display: flex;
    flex-flow: column nowrap;
  }

  ul {
    display: flex;
    flex-flow: row nowrap;
    width: 700px;
    margin: 0 auto;
    padding: 0;
    color: #fff;
  }

  ul li {
    flex: 0 0 24.83%;
    height: 50px;
    line-height: 50px;
    background-color: #999;
    border: 1px solid #ccc;
    list-style: none;
    cursor: pointer;
  }

  ul li + li, ul li + li + li {
    border-left: 0px;
  }

  .content {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 698px;
    height: 100px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-top: 0px;
    background-color: #999;
  }

  .content div {
    flex: 0 0 40%;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  .content .left {
    text-align: left;
  }

  .content .right {
    text-align: right;
  }
</style>
