<template>
  <div class="c-live">
    <div class="live-body">
      <div class="video">
        <video-player class="video-player-box"
                      ref="videoPlayer"
                      :options="playerOptions"
                      :playsinline="true"
                      customEventName="customstatechangedeventname">
        </video-player>
      </div>
    </div>
  </div>
</template>

<script>
  import {videoPlayer} from "vue-video-player"
  import 'video.js/dist/video-js.css'
  import {contribHls} from "videojs-contrib-hls"

  export default {
    name: "video.vue",
    components: {videoPlayer, contribHls},
    data() {
      return {
        playerOptions: {
          // videojs options
          width: 700,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://storage.sandbox.yike.fm/lesson/record/5a40cfd7025cd"
          },
            {
            withCredentials: false,
              type: 'application/x-mpegURL',
              src: 'https://storage.sandbox.yike.fm/lesson/record/5ab3804c74afa.m3u8'
          }],
          poster: "/static/images/author.jpg"
        }
      }
    }
  }
</script>

<style scoped>
  .live-body {
    width: 700px;
    margin: 0 auto;
  }
  .video{
    width: 700px;
  }
</style>
