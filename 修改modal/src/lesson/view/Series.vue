<template>
  <div class="c-detail">
    <div class="profile">
      <detail-cover :profile="profile"></detail-cover>
      <div class="frm-profile">
        <div class="title font-bold">{{profile.title}}</div>
        <div class="datum flex-row">
          <div class="flex-col about">
            <div class="flex-row">
              <!--<i class="icon-yike icon-clock"></i>-->
              <span class="flex-row  text-desc font-medium"
                    v-if="profile.progress">已开 {{profile.progress[1]}}/{{profile.progress[0]}}节</span>
            </div>
            <div class="price-frm flex-row">
              <div class="on-sale flex-row" v-if="profile.price && 0">
                <span class="font-medium">特价特惠</span>
                <span class="on-sale-tag"></span>
              </div>
              <div class="price">
                <span class="n-price font-bold">￥{{profile.price}}</span>
                <span class="o-price" v-if="profile._price">￥{{profile._price}}</span>
              </div>
            </div>
          </div>
          <div class="invite flex-col btn" @click="invite">
            <i class="icon-yike icon-share"></i>
            <span class="font-medium text-desc">邀请有奖</span>
          </div>
        </div>
      </div>
      <detail-policy></detail-policy>
    </div>
    <div class="tabs" id="tabs">
      <tabs :items="tabs" :active="activeTab" v-on:switch="switchTab"></tabs>
    </div>
    <div id="lesson">
      <div id="teacher" class="teacher">
        <block title="讲师">
          <detail-teacher v-if="profile.teacher" :tusn="profile.teacher.sn"></detail-teacher>
        </block>
      </div>
      <div id="introduce" class="content border">
        <block title="简介">
          <div class="markdown" v-html="markdown(introduce)"></div>
        </block>
      </div>
    </div>
    <div id="catalog">
      <div id="category" class="relative border" v-if="relative.length">
        <block title="目录">
          <lesson-cell :lesson="item" v-for="(item,index) in relative" :key="index"></lesson-cell>
        </block>
      </div>
    </div>
    <div class="contact">
      <DetailContact></DetailContact>
    </div>
    <div class="control flex-row" v-if="individual">
      <div class="ctrl-home ctrl-icon" @click="home">
        <i class="icon-yike icon-home"></i>
        <span class="font-ragular">首页</span>
      </div>
      <div class="ctrl-locked ctrl-text font-medium" v-if="check === 'refund'">已退款</div>
      <div class="ctrl-refund ctrl-text font-medium" v-if="canRefund">退款</div>
      <div class="ctrl-free ctrl-text font-medium " v-if="freeTry && check === false"
           @click="$router.push(`/lesson/detail?sn=${freeTry}`)">
        免费试听
      </div>
      <div class="ctrl-enroll ctrl-text font-medium" @click="enroll" v-if="canEnroll && check !== 'access'">报名系列课</div>
      <div class="ctrl-enroll_ ctrl-text font-medium" @click="enroll" v-if="canEnroll && check === 'access'">报名剩余课程
      </div>
      <div class="ctrl-access ctrl-text font-medium" @click="study" v-if="check === 'access'">进入课堂</div>
      <div class="ctrl-locked ctrl-text font-medium" v-if="check === 'pending'">等待开课</div>
    </div>
    <detail-order :top="top" v-if="order" :order="order" v-on:cancel="cancelEnroll"
                  v-on:complete="completeEnroll" @change="change" @change2="change2">
    </detail-order>
    <modal-action v-on:close="displayAfterEnroll = false" :display="displayAfterEnroll" width="90%" v-if="individual">
      <div slot="head">报名成功</div>
      <ul>
        <li>永久回放</li>
        <li>进入课堂1小时内无条件退款</li>
        <li v-if="!individual.subscribed">
          <span>关注公众号可接收开课提醒</span>
        </li>
      </ul>
      <div class="flex-row" v-if="!individual.subscribed">
        <img :src="app.linkToAssets('/img/qrcode/yike-fm.png')" style="width: 3rem; height: 3rem"/>
      </div>
      <div slot="foot" class="btn btn-vice" @click="displayAfterEnroll = false" v-if="check==='access'">稍后再看</div>
      <div slot="foot" class="btn btn-primary" @click="study" v-if="check === 'access'">开始学习</div>
      <div slot="foot" class="btn btn-primary" @click="displayAfterEnroll = false" v-else>知道了</div>
    </modal-action>
  </div>
</template>

<script>
  import qs from 'qs'
  import Tabs from '@/components/Tabs'
  import Block from '@/components/Block'
  import DetailCover from '../components/DetailCover'
  import DetailTeacher from '../components/DetailTeacher'
  import DetailPolicy from '../components/DetailPolicy'
  import DetailContact from '../components/DetailContact'
  import DetailOrder from '../components/DetailOrder'
  import StatusLabel from '../components/unit/StatusLabel'
  import RatingCell from '../components/unit/RatingCell'
  import LessonCell from '../components/unit/LessonCell'
  import ModalAction from "../../components/modal/Action"

  const markdown = require('markdown-it')({html: true})
  let tabsHeight

  export default {
    name: 'lesson-detail',
    components: {
      Tabs,
      Block,
      DetailCover,
      DetailTeacher,
      DetailPolicy,
      DetailContact,
      DetailOrder,
      StatusLabel,
      RatingCell,
      LessonCell,
      ModalAction
    },
    data() {
      return {
        profile: {},
        teacher: {},
        introduce: '',
        relative: [],
        individual: null,
        freeTry: null,
        rating: {},
        activeTab: 'lesson',
        CourseStatus: '',
        tabs: [
          {'key': 'lesson', name: '课程'},
          {'key': 'catalog', name: '目录'}
        ],
        order: null,
        displayAfterEnroll: false,
        top: ''
      }
    },
    created() {
      this.api.get('/api/jweixin-config', {url: location.href}).then((res) => {
        res.data.jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage']
        this.wx.config(res.data)
      })
      let lessonSn = this.$route.query.sn
      this.api.get('/api/series-profile', {
        sn: lessonSn
      }).then((res) => {
          this.profile = res.data
          this.app.setTitle(this.profile.title)
          this.app.onShare({
            title: `易灵微课-${this.profile.title}`,
            desc: '永久回放，1小时不满意退款',
            imgUrl: this.profile.cover
          })
        }
      )
      this.api.get('/api/series-introduce', {
        sn: lessonSn
      }).then((res) => {
        this.introduce = res.data
        this.introduce = JSON.parse(this.introduce).content
      })
      this.api.get('/api/series-relative', {
        sn: lessonSn
      }).then((res) => {
        this.relative = res.data
        console.log(res.data)
        for (let lesson of res.data) {
          if (lesson.price === 0) {
            this.freeTry = lesson.sn
            console.log(lesson.sn)
            return
          }
        }
      })
      this.api.get('/api/individual-series', {
        sn: lessonSn
      }).then((res) => {
        this.individual = res.data
      }).catch(() => {
        this.individual = {}
      })
    },
    mounted() {
      tabsHeight = document.getElementById('tabs').clientHeight
      window.addEventListener('scroll', this.menu)
    },
    computed: {
      check() {
        if (!this.individual.lesson) {
          return false
        }
        let access = false
        for (let lesson of this.individual.access) {
          if (lesson.step !== 'opened') {
            return 'access' // 有任一课程可观看
          }
          access = true
        }
        if (this.individual.refund.length === this.individual.lesson) {
          return 'refund' // 所有课已退款
        }
        return access ? 'pending' : false; // 全部课程尚未开启
      },
      canEnroll() {
        if (this.individual.enroll) {
          return this.individual.enroll.length
        } else {
          return true
        }
      },
      canRefund() {
        if (this.individual.refund) {
          return this.individual.refund.length
        } else {
          return 0
        }
      }
    },
    methods: {
      markdown(text) {
        return markdown.render(text || '');
      },
      switchTab(key) {
        if (key === 'catalog') {
          document.body.scrollTop = document.getElementById('catalog').offsetTop
          document.documentElement.scrollTop = document.getElementById('catalog').offsetTop
        }
        this.activeTab = window.location.hash = key
      },
      enroll() { // 报名下单
        // this.app.disableBodyScroll()
        this.api.post('/api/order-book-series', {
          sn: this.$route.query.sn,
          origin: this.$route.query.origin
        }).then((res) => {
          if (res.data) { // 付费课程报名
            this.order = res.data
          } else { // 免费课程报名
            this.completeEnroll()
          }
        }, this.api.onErrorSign)
      },
      completeEnroll() { // 订单支付完成
        this.order = null
        // this.app.enableBodyScroll()
        // 重新获取课程状
        this.api.get('/api/individual-series', {
          sn: this.$route.query.sn
        }).then((res) => {
          this.individual = res.data
          this.displayAfterEnroll = true
        })
      },
      cancelEnroll(res) { // 取消报名
        this.top = res
        setTimeout(() => {
          this.order = null
          this.top = ''
        }, 300)
      },
      home() {
        this.$router.push('/lesson/home')
      },
      study() { // 进入课堂
        for (let lesson of this.individual.access) {
          if (lesson.step !== 'opened') {
            let query = qs.stringify({
              isOwner: 'no',
              lesson_sn: lesson.sn,
              teach: `${lesson.sn}-T`,
              discuss: `${lesson.sn}-D`
            })
            window.location.href = `/live?${query}`
            return
          }
        }
      },
      invite() { // 邀请卡
        window.location.href = `/promote/invite?sn=${this.$route.query.sn}`
      },
      refund() { // 退款
        let query = qs.stringify({
          isOwner: 'no',
          lesson_sn: this.$route.query.sn,
          mode: this.individual.refund.mode,
          title: this.profile.title,
          teacher: this.profile.teacher.name
        })
        window.location.href = this.app.linkToStudent(`/?v=1#/course/refund?${query}`)
      },
      menu() {
        let d = document.documentElement
        if (navigator.userAgent.indexOf('Mobile') !== -1) {
          d = document.body
        }
        if (d.scrollTop > document.getElementById('catalog').offsetTop - tabsHeight || d.scrollHeight - d.scrollTop === d.clientHeight) {
          this.activeTab = 'catalog'
        } else {
          this.activeTab = 'lesson'
        }
      },
      change(res) {
        this.top = res
      },
      change2(res) {
        this.top = res
      }
    }
  }
</script>

<style>
  @import "../../assets/css/markdown.css";
</style>

<style scoped>
  .border {
    border-bottom: 1px #ddd solid;
  }

  .c-detail {
    padding-bottom: 1rem;
  }

  .profile {
    margin-bottom: .3rem;
    background: #fff;
  }

  .frm-profile {
    padding: .4rem .3rem;
  }

  .profile .title {
    height: .38rem;
    line-height: .38rem;
    font-size: .36rem;
    font-weight: bold;
    color: #0D0D0D;
  }

  .profile .datum {
    justify-content: space-between;
    padding-top: .2rem;
  }

  .profile .info {
    height: 1rem;
    justify-content: space-between;
  }

  .profile .invite {
    color: #666;
  }

  .invite .icon-share {
    color: #2F57DA;
    font-size: .5rem;
  }

  .series {
    font-size: .24rem;
    color: #0D0D0D;
    line-height: .36rem;
    padding-top: .26rem;
  }

  .content {
    margin-bottom: .3rem;
    padding-bottom: .3rem;
    background: #fff;
  }

  .icon-clock {
    height: .3rem;
    line-height: .3rem;
    padding-right: .13rem;
  }

  .icon-clock:before {
    color: #2F57DA;
    font-size: .4rem;
  }

  .icon-clock + span {
    color: #808080;
    height: .3rem;
  }

  .price {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    color: #F23F15;
    font-size: .42rem;
  }

  .control {
    z-index: 2;
    position: fixed;
    bottom: 0;
    height: 1rem;
    width: 7.5rem;
    box-shadow: 0 0 0.1rem rgba(0, 0, 0, .1);
    font-size: .32rem;
  }

  .control > div {
    height: 100%;
  }

  .ctrl-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: .2rem;
    color: #666;
    background: #fff;
    cursor: pointer;
  }

  .ctrl-icon > i {
    color: #2F57DA;
    padding: 0 .32rem;
    font-size: .32rem;
  }

  .ctrl-icon > span {
    font-size: .2rem;
  }

  .ctrl-text {
    padding: 0 .32rem;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }

  .ctrl-enroll, .ctrl-access {
    color: #fff;
    background: #2F57DA;
    cursor: pointer;
  }

  .ctrl-refund, .ctrl-free {
    flex-grow: 0;
    background: #fff;
    color: #2F57DA;
    cursor: pointer;
    border-left: 1px solid #ccc;
  }

  .ctrl-enroll_ {
    flex-grow: 0;
    color: #fff;
    padding: 0 1em;
    background: #63a4fb;
    cursor: pointer;
  }

  .ctrl-locked {
    color: #fff;
    background: #ccc;
  }

  .tabs {
    position: sticky;
    top: 0;
    cursor: pointer;
  }

  .rating {
    margin-top: .3rem;
  }

  .contact {
    margin-top: .3rem;
  }

  .datum > .flex-col.about {
    justify-content: space-between;
    align-items: flex-start;
  }

  .price-frm {
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 0.36rem;
    padding-top: .2rem;
  }

  .on-sale {
    background: #F23F15;
    color: white;
    text-align: center;
  }

  .on-sale > span:first-child {
    display: block;
    width: .8rem;
    text-align: center;
    font-size: .2rem;
    padding-left: .2rem;
  }

  .on-sale-tag {
    border: #F23F15 0.2rem solid;
    border-right: 0.1rem solid #fff;
  }

  .price {
    align-items: flex-end;
    height: 0.36rem;
    line-height: 0.36rem;
  }

  .n-price {
    /*width: 0.8rem;*/
    /*padding-left: 0.31rem;*/
    font-size: 0.42rem;
    color: #F23F15;
  }

  .o-price {
    padding-left: 0.1rem;
    font-size: 0.27rem;
    text-decoration: line-through;
    color: #808080;
    line-height: 1;
  }

  .o-price + div {
    width: 0.96rem;
    height: 0.23rem;
    padding: 0.13rem 0 0 2.45rem;
    font-size: 0.2rem;
    text-align: right;
    color: #666666;
  }
</style>
