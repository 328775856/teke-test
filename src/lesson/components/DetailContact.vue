<template>
  <div class="c-lesson-detail-contact flex-row">
    <div class="desc">
      <span>
      如果对课程内容及产品使用上有任何建议和疑惑，请通过添加右侧右侧二维码与我们进行联系沟通
      </span>
    </div>
    <div class="qrcode flex-row">
      <div class="qrcode-yike_01 flex-col">
        <img :src="access('static/img/qrcode/yike-01.jpg')"/>
        <i class="icon-yike icon-wxtb flex-row">易课小助手</i>
      </div>
      <div class="qrcode-mp flex-col">
        <img :src="access('static/img/qrcode/mp.png')"/>
        <i class="icon-yike icon-wxtb flex-row">易课公众号</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lesson-detail-contact'
  }
</script>

<style scoped>
  .c-lesson-detail-contact {
    height: 3rem;
    justify-content: space-between;
    background: white;
  }
  .desc {
    flex-grow: 1;
    font-size: .24rem;
    color: #666;
    padding: .3rem;
  }
  .qrcode {
    width: 3.5rem;
    justify-content: space-around;
    border-left: 1px solid #000;
  }
  .qrcode img {
    width: 1.1rem;
    height: 1.1rem;
    border: .13rem solid #F7E1BB;
    border-radius: .1rem;
  }
  .qrcode-yike_01 {
    padding: 0 .15rem 0 .3rem;
  }
  .qrcode-mp {
    padding: 0 .3rem 0 .15rem;
  }
  i{
    justify-content: space-between;
    width: 100%;
    padding-top: .08rem;
    color: #0D0D0D;
    font-size: .21rem;
  }
  i:before{
    height: 75%;
    color: #29BC60;
    font-size: .24rem;
  }
</style>
