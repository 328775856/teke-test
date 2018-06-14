<template>
    <div class="c-qrcode">
      <div class="frm-qrcode flex-row">
        <div class="text flex-row">如果对课程内容及产品使用上有任何建议和疑惑，请通过添加右侧二维码与我们进行联系沟通。</div>
        <div class="img-frm flex-row">
          <div>
            <div class="container flex-col">
              <div>
                <img class="img" :src="linkToAssets('static/img/qrcode/yike-01.jpg')">
              </div>
            </div>
            <div class="msg flex-row">
              <i  class="wx icon-yike icon-wxtb  flex-row"></i>
              <span>易课小助手</span>
            </div>
          </div>
          <div>
            <div  class="container  flex-col">
              <div>
                <img class="img" :src="linkToAssets('static/img/qrcode/mp.png')">
              </div>
            </div>
            <div class="msg flex-row">
              <i class="wx icon-yike icon-wxtb flex-row"></i>
              <span>易课公众号</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "qrcode"
    }
</script>

<style scoped>
  .c-qrcode{
  }
  .frm-qrcode {
    justify-content: space-between;
    height: 100%;
    padding: 0.71rem 0.3rem 1.49rem 0.3rem;
    background: white;
  }

  .text {
    width: 3.2rem;
    height: 1.77rem;
    padding-right: 0.2rem;
    border-right: 1px solid #ccc;
    font-size: 14px;
    color: #666666;
    line-height: 24px;
  }
  .img-frm{
    width: 3.18rem;
    justify-content: space-between;
  }
  .img-frm>div{
    width: 1.44rem;
  }
  .img{
    width: 1.1rem;
    height: 1.1rem;
  }
  .container{
    width:1.44rem;
    height:1.45rem;
    background: #F7E1BB;
    border-radius: 10px
  }
  .container div{
    width:1.1rem;
    height:1.1rem;
    padding: 0.05rem;
    background:#fff;
  }
  .msg{
    justify-content: space-between;
    width: 1.44rem;
    padding-top: 0.08rem;
    font-size: 0.21rem;
    letter-spacing: 1px;
  }
  .wx{
    width:0.24rem;
    height:0.24rem;
  }
  .icon-wxtb:before{
    color:#29BC60;
    font-size: 0.25rem;
  }
</style>
