<template>
  <div class="c-fold">
    <div :class="{show:show}">
      asdasdddddddddddddddddddddddddddddddddddddddddddddddddddddda
      asdasdddddddddddddddddddddddddddddddddddddddddddddddddddddda
      asdasdddddddddddddddddddddddddddddddddddddddddddddddddddddda
      asdasdddddddddddddddddddddddddddddddddddddddddddddddddddddda
    </div>
    <a @click="fold">{{msg}}</a>
  </div>
</template>

<script>
  export default {
    name: "fold.vue",
    data() {
      return {
        show: true,
        msg: '打开'
      }
    },
    methods: {
      fold() {
        this.show = !this.show;
        if (this.msg === '打开') {
          this.msg = '折叠'
        } else {
          this.msg = '打开'
        }
      }
    }
  }
</script>

<style scoped>
  .c-fold {
    width: 700px;
    height: 1500px;
    margin: 0 auto;
    border: 1px solid #eee;
  }

  .c-fold div {
    width: 700px;
    margin: 0 auto;
  }

  .show {
    height: 40px;
    overflow: hidden;
  }

  a {
    float: right;
    border: 1px #999 solid;
  }
</style>
