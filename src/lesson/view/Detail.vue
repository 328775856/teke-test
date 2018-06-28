<template>
  <div class="c-detail">
    <div class="profile">
      <detail-cover :profile="profile"></detail-cover>
      <div class="frm-profile">
        <div class="title font-bold">{{profile.title}}</div>
        <span class="series text-desc font-medium btn" v-if="profile.series" @click="go">
          所属系列 · {{profile.series.name}}
        </span>
        <div class="datum flex-row">
          <div class="info flex-col">
            <div class="flex-row" v-if="profile.plan">
              <i class="icon-yike icon-clock flex-col"></i>
              <span class="time text-desc font-medium flex-row">{{profile.plan.dtm_start}}</span>
              <status-label :status="profile.status"/>
            </div>
            <div class="price font-bold">￥{{profile.price}}</div>
          </div>
          <div class="invite flex-col btn" @click="invite">
            <i class="icon-yike icon-share"></i>
            <span class="text-desc font-medium">邀请有奖</span>
          </div>
        </div>
      </div>
      <detail-policy></detail-policy>
    </div>
    <div class="tabs">
      <tabs :items="tabs" :active="activeTab" v-on:switch="switchTab"></tabs>
    </div>
    <div class="teacher">
      <block title="讲师">
        <detail-teacher v-if="profile.teacher" :tusn="profile.teacher.sn"></detail-teacher>
      </block>
    </div>
    <div class="content border">
      <block title="简介">
        <div v-html="markdown(introduce)" class="markdown"></div>
      </block>
    </div>
    <div class="relative border" v-if="relative.length">
      <block title="相关课程">
        <router-link slot="more" :to="`/lesson/series?sn=${profile.series.sn}#catalog`">
          <span>查看全部</span>
          <i class="icon-yike icon-arrow-r text-desc"></i>
        </router-link>
        <lesson-cell :lesson="item" v-for="(item,index) in relative" :key="index"></lesson-cell>
      </block>
    </div>
    <div class="rating border">
      <block :title="ratingTitle">
        <div slot="more" v-if="rating.stats">
          <a :href="app.linkToStudent(`/?v=1#/course/message/${$route.query.sn}/task?lesson_sn=${$route.query.sn}`)"
             class="btn">
            <span class="font-medium">已有{{rating.stats.turnout}}人评价</span>
            <i class="icon-yike icon-arrow-r text-desc"></i>
          </a>
        </div>
        <rating-cell v-for="(rate,index) in rating.list" :rate="rate" :key="index"></rating-cell>
      </block>
    </div>
    <div class="promote-rank"></div>
    <div class="contact">
      <DetailContact></DetailContact>
    </div>
    <div class="control flex-row" v-if="individual">
      <div class="ctrl-home ctrl-icon" @click="home">
        <i class="icon-yike icon-home"></i>
        <span class="font-ragular">首页</span>
      </div>
      <div class="ctrl-refund ctrl-text font-medium" @click="refund" v-if="individual.refund">退款</div>
      <div class="ctrl-locked ctrl-text font-medium" v-if="individual.status === 'refund'">已退款</div>
      <div class="ctrl-enroll ctrl-text font-medium" @click="enroll" v-if="check === 'enroll'">立即报名</div>
      <div class="ctrl-access ctrl-text font-medium" @click="study" v-else-if="check === 'access'">进入课堂</div>
      <div class="ctrl-locked ctrl-text font-medium" v-else-if="check === 'wait'">等待开课</div>
    </div>
    <detail-order :order="order" v-on:cancel="cancelEnroll" v-on:complete="completeEnroll"></detail-order>
    <modal-action v-on:close="displayAfterEnroll = false" :display="displayAfterEnroll" width="90%" v-if="individual">
      <div slot="head">报名成功</div>
      <ul>
        <li>永久回放</li>
        <li>听课开始1小时内无条件退款</li>
        <li v-if="!individual.subscribed">
          <span>关注公众号可接收开课提醒</span>
        </li>
      </ul>
      <div class="flex-row" v-if="!individual.subscribed">
        <img :src="app.linkToAssets('/img/qrcode/mp.png')" style="width: 3rem; height: 3rem"/>
      </div>
      <div slot="foot" class="btn btn-vice" @click="displayAfterEnroll = false" v-if="check==='access'">稍后再看</div>
      <div slot="foot" class="btn btn-primary" @click="study" v-if="check==='access'">开始学习</div>
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
  import ModalAction from "../../components/modal/Action";

  const markdown = require('markdown-it')({html: true})

  export default {
    name: 'lesson-detail',
    components: {
      ModalAction,
      Tabs,
      Block,
      DetailCover,
      DetailTeacher,
      DetailPolicy,
      DetailContact,
      DetailOrder,
      StatusLabel,
      RatingCell,
      LessonCell
    },
    data() {
      return {
        profile: {},
        teacher: {},
        introduce: '',
        relative: [],
        individual: null,
        rating: {},
        activeTab: 'lesson',
        CourseStatus: '',
        tabs: [
          {'key': 'lesson', name: '课程'},
          {'key': 'board', name: '交流'}
        ],
        order: null,
        displayAfterEnroll: false
      }
    },
    created() {
      this.api.get('/api/jweixin-config', {url: location.href}).then((res) => {
        res.data.jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage']
        this.wx.config(res.data)
      })
      let lessonSn = this.$route.query.sn
      this.api.get('/api/lesson-profile', {
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
      this.api.get('/api/lesson-introduce', {
        sn: lessonSn
      }).then((res) => {
        this.introduce = res.data
      })
      this.api.get('/api/lesson-relative', {
        sn: lessonSn
      }).then((res) => {
        this.relative = res.data
      })
      this.api.get('/api/lesson-rating', {
        sn: lessonSn
      }).then((res) => {
        this.rating = res.data
      })
      this.api.get('/api/individual-lesson', {
        sn: lessonSn
      }).then((res) => {
        this.individual = res.data
      }).catch(() => {
        this.individual = {
          'status': 'fresh'
        }
      })
      if (this.$route.query.action) {
        try {
          this[this.$route.query.action]()
        } catch (e) {}
      }
    },
    computed: {
      check() {
        switch (this.individual.status) {
          case 'fresh':
          case 'reset':
            return 'enroll'
          case 'enroll':
          case 'access':
            if (this.profile.status === 'opened') {
              return 'wait'
            } else if (['onlive', 'repose', 'finish'].indexOf(this.profile.status) !== -1) {
              return 'access'
            } else {
              return this.profile.status
            }
          default:
            return this.individual.status
        }
      },
      ratingTitle() {
        let title = '评分'
        if (this.rating.stats) {
          title += `(${this.rating.stats.score === 0 ? 0 : this.rating.stats.score.toFixed(1)})`
        }
        return title
      }
    },
    methods: {
      markdown(text) {
        return markdown.render(text || '');
      },
      switchTab(key) {
        this.activeTab = key
        switch (key) {
          case 'board':
            window.location.href = this.app.linkToStudent(`/?v=1#/course/message/${this.$route.query.sn}/discuss`)
            break;
          default:
            break;
        }
      },
      enroll() { // 报名下单
        this.api.post('/api/order-book-lesson', {
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
        // 重新获取课程状态
        this.api.get('/api/individual-lesson', {
          sn: this.$route.query.sn
        }).then((res) => {
          this.individual = res.data
          this.displayAfterEnroll = true
        })
      },
      cancelEnroll() { // 取消报名
        this.order = null
      },
      home() { // 返回首页
        this.$router.push('/lesson/home')
        // window.location.href = this.app.linkToStudent('/')
      },
      study() { // 进入课堂
        // todo 增加【报名成功，准备进入课堂】读秒缓冲
        let lessonSn = this.$route.query.sn
        let query = qs.stringify({
          isOwner: 'no',
          lesson_sn: lessonSn,
          teach: `${lessonSn}-T`,
          discuss: `${lessonSn}-D`
        })
        window.location.href = `/live?${query}`
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
      go(index) {
        location.href = `/lesson/series?sn=${this.profile.series.sn}`
      }
    }
  }
</script>
<style>
  @import '../../assets/css/markdown.css';
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
    height: .34rem;
    line-height: .34rem;
    font-size: .36rem;
    font-weight: bold;
    color: #0D0D0D;
  }

  .profile .datum {
    justify-content: space-between;
  }

  .profile .time {
    margin-right: .2rem;
    color: #808080;
  }

  .profile .info {
    justify-content: space-between;
  }

  .info .flex-row {
    height: .8rem;
    line-height: .8rem;
  }

  .profile .invite {
    justify-content: space-between;
    height: .92rem;
    padding-top: .2rem;
    color: #666;
  }

  .invite .icon-share {
    color: #2F57DA;
    font-size: .5rem;
  }

  span.series {
    height: .25rem;
    display: inline-block;
    text-decoration: none;
    color: #2F57DA;
    line-height: .25rem;
    margin-top: .3rem;
  }

  .content {
    margin-bottom: .3rem;
    padding-bottom: .3rem;
    background: #fff;
  }

  .icon-clock:before {
    padding-right: .13rem;
    color: #2F57DA;
    font-size: .4rem;
  }

  .price {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: .32rem;
    line-height: .32rem;
    color: #F23F15;
    font-size: .42rem;
  }

  .control {
    position: fixed;
    bottom: 0;
    height: 1rem;
    width: 7.5rem;
    font-size: .32rem;
    box-shadow: 0 0 0.1rem rgba(0, 0, 0, .1);
  }

  .control > div {
    height: 100%;
  }

  .ctrl-icon {
    width: 1rem;
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
    font-size: .4rem;
    color: #2F57DA;
    padding-top: .1rem;
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

  .ctrl-refund {
    flex-grow: 0;
    color: #fff;
    padding: 0 .68rem;
    background: #63a4fb;
    cursor: pointer;
  }

  .ctrl-locked {
    background: #ccc;
    color: #fff;
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
</style>
