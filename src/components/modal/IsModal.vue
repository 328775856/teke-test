<template>
  <div class="c-modal">
    <div class="mask" @click="close">
      <div class="content">
        <div class="header">
          <slot name="title" class="title">
            {{title}}
          </slot>
        </div>
        <div class="content-body">
          <div class="notice">
            <slot></slot>
          </div>
          <div class="frm-button">
            <div class="button" @click="close">{{confirm}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IsModal",
    props: ['title', 'confirm', 'show'],
    methods: {
      close() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  .c-modal {
  }

  .mask {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(44, 44, 44, .3);
  }

  .content {
    width: 5.1rem;
    height: 4.8rem;
    background: rgba(221, 221, 221, 1);
    border-radius: 0.12rem;
  }

  .header {
    width: 5.1rem;
    height: 1rem;
    line-height: 1rem;
    background: rgba(170, 170, 170, 1);
    border-radius: 0.12rem 0.12rem 0 0;
    text-align: center;
  }

  .content-body {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    height: 3.8rem;
  }

  .notice {
    width: 4.07rem;
    height: 1.62rem;
    background: rgba(170, 170, 170, 1);
  }

  .frm-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    width: 1.8rem;
    height: 0.6rem;
    line-height: .6rem;
    background: rgba(170, 170, 170, 1);
    border-radius: 0.3rem;
    text-align: center;
    font-size: .3rem;
  }
</style>
