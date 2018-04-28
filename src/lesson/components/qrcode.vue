<template>
    <div class="c-qrcode">
      <div class="frm-qrcode flex-row">
        <div class="text">如果对课程内容及产品使用上有任何建议和疑惑，请通过添加右侧二维码与我们进行联系沟通。</div>
        <div class="">
          <div></div>
          <div></div>
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

  .frm-qrcode {
    justify-content: space-between;
    background: white;
    padding: 0.71rem 0.3rem 1.49rem 0.3rem;
  }

  .text {
    width: 3rem;
    padding-right: 0.3rem;
    border-right: 1px solid #ccc;
    font-size: 14px;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;

  }

  .text + div {
    width: 3rem;
  }
</style>
<style>
  .frm-qrcode {
    justify-content: space-between;
    background: white;
    padding: 0.71rem 0.3rem 1.49rem 0.3rem;
    padding-bottom: 2rem;
  }
</style>
