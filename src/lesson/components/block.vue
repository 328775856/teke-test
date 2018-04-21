<template>
  <div class="c-block" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="1">
    <div v-for="(item) in blocks" class="content" :key="item.index">
      <div class="left" :style="{backgroundImage:'url('+item.image+')'}"></div>
      <div class="middle">
        <div>{{item.title}}</div>
        <div>{{item.teacher}}</div>
        <div>一句话介绍</div>
      </div>
      <div class="right">
        <div>{{item.people}}</div>
        <div>{{item.time}}</div>
        <div>{{item.status}}</div>
      </div>
    </div>
    <div v-show="loadingShow" class="loadingShow">正在加载中...</div>
  </div>
</template>

<script>
  import infiniteScroll from 'vue-infinite-scroll';

  export default {
    name: "block.vue",
    directives: {infiniteScroll},
    props: ['blocks'],
    data() {
      return {
        loadingShow: false,
        busy: false
      }
    },
    methods: {
      loadMore() {
        this.busy = true;
        this.loadingShow = true;
        setTimeout(() => {
          for (let i = 0, j = 1; i < j; i++) {
            let len = document.getElementsByClassName('content').length;
            if (len < 10) {
              this.blocks.push(this.blocks[0]);
              this.loadingShow = false;
            } else {
              document.getElementsByClassName('loadingShow')[0].innerHTML = '没有更多了';
            }
          }
          this.busy = false;
        }, 100)
      }
    }
  }
</script>

<style scoped>
  .c-block {
    height: auto;
    overflow: hidden;
  }

  .c-block .content {
    display: flex;
    flex-flow: row nowrap;
    width: 700px;
    margin: 0 auto;
    border: 1px solid #eee;
  }

  .c-block .content .left {
    flex: 3;
    height: 160px;
  }

  .c-block .content .middle, .c-block .content .right {
    display: flex;
    flex-flow: column nowrap;
    flex: 2;
    justify-content: space-around;
    height: 160px;
    text-align: center;
  }

  .c-block .content .right {
    flex: 1;
  }

  .loadingShow {
    position: relative;
    width: 702px;
    height: 30px;
    margin: 0 auto;
    line-height: 30px;
    text-align: center;
    background: #98fff3;
  }
</style>
