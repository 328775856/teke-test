<template>
  <div class="c-lesson-cell">
    <div class="frm flex-row">
      <img :src="lesson.cover">
      <div class="flex-col detail">
        <div class="flex-row detail-top">
          <div class="title">{{lesson.title}}</div>
          <div class="flex-col">
            <status-label :status="lesson.status"/>
            <div class="price">￥{{lesson.price}}</div>
          </div>
        </div>
        <div class="flex-row detail-bottom">
          <div class="enroll">{{lesson.enrollment}}</div>
          <div class="tms">{{lesson.plan.dtm_start}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import StatusLabel from './StatusLabel'

  export default {
    name: "lesson-cell",
    props: ['lesson'],
    components: {StatusLabel}
  }
</script>

<style scoped>
  .c-lesson-cell {
    padding: .3rem 0;
    border-bottom: 1px solid #DDDDDD;
  }
  .c-lesson-cell:last-child {
    border-bottom: 0;
  }

  .frm {
    justify-content: flex-start;
  }

  .detail {
    flex: 1;
    height: 1.28rem;
  }

  img {
    width: 2.4rem;
    height: 1.28rem;
    padding-right: .3rem;
  }

  .detail-top, .detail-bottom {
    width: 100%;
  }

  .detail-top {
    flex-grow: 1;
    height: 80%;
  }

  .detail-bottom {
    height: 20%;
  }

  .detail, .detail-top, .detail-bottom, .title + .flex-col {
    justify-content: space-between;
  }

  .title {
    width: 75%;
    height: 110%;
    font-size: .27rem;
    color: #0D0D0D;
    font-weight: bold;
  }

  .title + div {
    height: 100%;
  }

  .price {
    width: 100%;
    font-size: .3rem;
    color: #F23F15;
    text-align: right;
  }

  .enroll {
    font-size: .24rem;
    color: #999999;
  }

  .tms {
    font-size: .24rem;
    color: #808080;
    line-height: .36rem;

  }
</style>
