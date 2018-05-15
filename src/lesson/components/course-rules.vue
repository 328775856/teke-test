<template>
  <div class="rules flex-row">
    <div class="mask flex-col" v-show="isShow">
      <div class="frm"  :style="{width:width+'px'}">
        <div class="container">
          <div class="title">课程须知</div>
          <div class="content">
            <ul>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
              <li class="flex-col">
                <i class="icon-yike icon-select">永久回放</i>
                <span>已购买</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button @click="show"  :style="{width:width+'px'}">完成</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "course-rules",
    props: ['isShow', 'width'],
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
    width: 100%;
  }

  .container {
    width: 100%;
    background: #fff;
    border-radius: 0.2rem 0.2rem 0 0;
    overflow: hidden;
  }

  .title {
    padding-top: 0.55rem;
    color: #0D0D0D;
    font-size: 0.32rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
  }

  .content {
    width: 6.7rem;
    margin: 0 auto;
    overflow-y: hidden;
  }
  ul{
    max-height: 6rem;
    margin-bottom: 0.5rem;
    overflow-y: scroll;
    color: #ccc;
    -webkit-overflow-scrolling: touch;
  }
  li.flex-col {
    align-items: flex-start;
  }

  .icon-select:before {
    padding-right: 0.2rem;
    color: #2F57DA;
  }

  li span {
    padding: 0.2rem 0 0.2rem 0.6rem;
  }

  button {
    width: 100%;
    height: 1rem;
    border: 0;
    background: #2F57DA;
    color: #fff;
    font-size: 0.32rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
    -webkit-tap-highlight-color: transparent;
  }
</style>
