<template>
  <div class="c-evaluate">
    <div class="flex-col">
      <div class="flex-row">
        <div class="nickname">Akiko</div>
        <div class="star"></div>
      </div>
      <div class="time">2018-04-15</div>
      <div class="text">这次的课程真的特别好，收获很大！</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "evaluate"
  }
</script>

<style scoped>
  .c-evaluate{
    padding:0  0.3rem;
    background: white;
  }
  .flex-col {
    padding: 0 0.3rem;
  }

  .flex-row {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
  }
  .time{
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 11.5px;
    color: #808080;
    text-align: left;
  }
  .text{
    width: 100%;
    font-size: 15px;
    color: #333333;
    letter-spacing: 1px;
  }
</style>
