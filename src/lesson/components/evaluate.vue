<template>
  <div class="c-evaluate">
    <div class="flex-col">
      <div class="flex-row nickname">
        <div class="flex-row">
          <div class="pie-b"></div>
          <div>Akiko</div>
        </div>
        <div class="star">12345</div>
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
    padding:0.1rem 0.3rem 0.5rem  0.3rem;
    background: white;
  }
  .c-evaluate .flex-col{
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.3rem;
  }
  .nickname{
    justify-content: space-between;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
  }
  .pie-b{
    border-width: 0.3rem;
    border-radius: 0.3rem;
  }
  .pie-b+div{
    padding-left: 0.32rem;
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
