<template>
  <div class="loading">
    <div><span></span></div>
    <div><span></span></div>
    <div><span></span></div>
  </div>
</template>

<script>export default {name: 'Block-loading'}
</script>

<style scoped>
  .loading {
    height: .5rem;
    margin: 0 auto;
    margin-top: .1rem;
    position: relative;
    -webkit-animation: load 3s linear infinite;
  }

  .loading div {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .loading span {
    display: inline-block;
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    background: #99CC66;
    position: absolute;
    left: 50%;
    margin-top: -.1rem;
    margin-left: -.1rem;
    -webkit-animation: changeBgColor 1s ease infinite;
  }

  @-webkit-keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
    }
    33.3% {
      -webkit-transform: rotate(120deg);
    }
    66.6% {
      -webkit-transform: rotate(240deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes changeBgColor {
    0%, 100% {
      background: #99CC66;
    }
    33.3% {
      background: #FFFF66;
    }
    66.6% {
      background: #FF6666;
    }
  }

  .loading div:nth-child(2) {
    -webkit-transform: rotate(120deg);
  }

  .loading div:nth-child(3) {
    -webkit-transform: rotate(240deg);
  }

  .loading div:nth-child(2) span {
    -webkit-animation-delay: 0.3s;
  }

  .loading div:nth-child(3) span {
    -webkit-animation-delay: 0.6s;
  }
</style>
