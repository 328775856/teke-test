<template>
  <div class="rules flex-row">
    <div class="mask flex-col" v-show="isShow">
      <div class="frm">
        <div class="container">
          <div class="title">课程须知</div>
          <div class="content">
            <ul>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买课程可永久回放</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">开课通知</i>
                <span>关注【易灵微课】公众号，开课自动提醒</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">无条件退款</i>
                <span>进入课堂1小时内，可无条件退款</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">自动退款</i>
                <span>课程结束7天后，未听课自动退款</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">课程特性</i>
                <span>讲师开课前，不可进入课堂；课程形式为文字、图片及语音；设有讨论区，可与其他学员及时交流。</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">课程提示</i>
                <span>禁止发布违反法律法规或与课程无关的内容；课程内容会消耗一定流量，建议在WiFi环境观看收听；讲师在本产品上发表的全部原创内容（包括但不限于文字、音频、图片等）著作权均归讲者本人所有。未经讲者授权许可，学员不得已任何载体或形式使用讲者的内容。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button @click="show">完成</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "course-rules",
    props: ['isShow'],
    methods: {
      show() {
        this.$emit('show')
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
  }
  .mask{
    justify-content: flex-end;
  }

  .frm {
    width: 7.5rem;
    height: 80%;
    border-radius: 0.2rem 0.2rem 0 0;
    background: #fff;
  }

  .container {
    height: 100%;
  }

  .title {
    padding-top: 0.55rem;
    color: #0D0D0D;
    font-size: 0.32rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
    background: transparent;
  }

  .content {
    width: 6.7rem;
    height: 100%;
    margin: 0 auto;
    margin-top: 0.3rem;
  }
  ul{
    height: 78%;
    overflow-y: scroll;
    color: #9f9c9c;
    -webkit-overflow-scrolling: touch;
  }
  li.flex-col {
    align-items: flex-start;
  }
  .icon-select{
    font-size: 14px;
    font-weight: 500;
  }
  .icon-select:before {
    padding-right: 0.3rem;
    color: #2F57DA;
  }

  li span {
    padding: 0.2rem 0.4rem 0.2rem 0.6rem;
    line-height: 0.4rem;
    font-size: 11.5px;
    text-align: justify;
  }

  button {
    width: 7.5rem;
    height: 1rem;
    border: 0;
    background: #2F57DA;
    color: #fff;
    font-size: 0.32rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
    -webkit-tap-highlight-color: transparent;
  }
</style>
