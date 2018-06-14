<template>
  <div class="c-detail">
    <div class="profile">
      <detail-cover :profile="profile"></detail-cover>
      <div class="frm-profile">
        <div class="title">{{profile.title}}</div>
        <div class="datum flex-row">
          <div class="flex-col about">
            <div class="flex-row">
              <i class="icon-yike icon-clock"></i>
              <span class="flex-row"
                    v-if="profile.progress">周三开课 {{profile.progress[1]}}/{{profile.progress[0]}}节</span>
            </div>
            <div class="price-frm flex-row">
              <div class="tag flex-row">
                <span>特价特惠</span>
                <span class="tag-foot"></span>
              </div>
              <div class="price">
                <span class="n-price ">￥{{profile.price}}</span>
                <span class="o-price">￥300</span>
              </div>
            </div>
          </div>
          <div class="invite flex-col btn" @click="invite">
            <i class="icon-yike icon-share"></i>
            <span>邀请有奖</span>
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
        <div v-html="markdown(introduce)"></div>
      </block>
    </div>
    <div class="relative border" v-if="relative.length">
      <block title="目录">
        <lesson-cell :lesson="item" v-for="(item,index) in relative" :key="index"></lesson-cell>
      </block>
    </div>
    <div class="contact">
      <DetailContact></DetailContact>
    </div>
    <div class="control flex-row" v-if="individual">
      <div class="ctrl-home ctrl-icon" @click="home">
        <i class="icon-yike icon-home"></i>
        <span>首页</span>
      </div>
      <div class="ctrl-icon">
        <i class="icon-yike icon-favorite"></i>
        <span>收藏</span>
      </div>
      <div class="ctrl-refund ctrl-text" @click="refund" v-if="individual.refund">退款</div>
      <div class="ctrl-locked ctrl-text" v-if="individual.status === 'refund'">已退款</div>
      <div class="ctrl-enroll ctrl-text" @click="enroll" v-if="check === 'enroll'">报名系列课</div>
      <div class="ctrl-access ctrl-text" @click="study" v-else-if="check === 'access'">进入课堂</div>
      <div class="ctrl-locked ctrl-text" v-else-if="check === 'wait'">等待开课</div>
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
  import {markdown} from 'markdown'
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
        rating: {},
        activeTab: 'lesson',
        CourseStatus: '',
        tabs: [
          {'key': 'lesson', name: '课程'},
          {'key': 'catalog', name: '目录'}
        ],
        order: null,
        displayAfterEnroll: true
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
      }
    },
    methods: {
      markdown(text) {
        return markdown.toHTML(text || '');
      },
      switchTab(key) {
        let d = document.documentElement// eslint-disable-line no-unused-vars
        let relativeTop = document.getElementsByClassName('relative')[0]
        let teacherTop = document.getElementsByClassName('teacher')[0]
        let t = document.getElementsByClassName('tabs')[0]
        this.activeTab = key
        switch (key) {
          case 'catalog':
            d.scrollTop = relativeTop.offsetTop - t.offsetHeight
            break;
          default:
            d.scrollTop = teacherTop.offsetTop - t.offsetHeight
            break;
        }
      },
      enroll() { // 报名下单
        this.app.disableBodyScroll()
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
        this.app.enableBodyScroll()
        // 重新获取课程状态
        this.api.get('/api/individual-lesson', {
          sn: this.$route.query.sn
        }).then((res) => {
          this.individual = res.data
          if (this.check === 'access') {
            this.displayAfterEnroll = true
            this.study() // 自动进入课堂
          }
        })
      },
      cancelEnroll() { // 取消报名
        this.app.enableBodyScroll()
        this.order = null
      },
      home() {
        this.$router.push('/lesson/home')
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
      }
    }
  }
</script>

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
    font-size: .36rem;
    font-weight: bold;
    color: #0D0D0D;
  }

  .profile .datum {
    justify-content: space-between;
    padding-top: .2rem;
  }

  .profile .time {
    margin-right: .2rem;
    font-size: .24rem;
    color: #808080;
  }

  .profile .info {
    height: 1rem;
    justify-content: space-between;
  }

  .profile .invite {
    font-size: .24rem;
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

  .icon-clock:before {
    padding-right: .13rem;
    color: #2F57DA;
    font-size: .3rem;
  }

  .icon-clock + span {
    color: #808080;
    font-size: .24rem;
  }

  .price {
    display: flex;
    justify-content: flex-start;
    width: 100%;
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
    font-size: .32rem;
    color: #2F57DA;
    padding: 0 .32rem;
  }

  .ctrl-text {
    padding: 0 .32rem;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #ccc;
  }

  .ctrl-enroll, .ctrl-access {
    color: #fff;
    background: #2F57DA;
    cursor: pointer;
  }

  .ctrl-refund {
    color: #2F57DA;
    background: #fff;
    cursor: pointer;
  }

  .ctrl-locked {
    color: #666;
    background: #fff;
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

  .tag {
    background: #F23F15;
    color: white;
    text-align: center;
  }

  .tag > span:first-child {
    display: block;
    width: .8rem;
    text-align: center;
    font-size: .2rem;
    padding-left: .2rem;
  }

  .tag-foot {
    border: #F23F15 0.2rem solid;
    border-right: 0.1rem solid #fff;
  }

  .price {
    align-items: flex-end;
    height: 0.36rem;
    line-height: 0.4rem;
  }

  .n-price {
    width: 0.8rem;
    padding-left: 0.31rem;
    font-size: 0.42rem;
    color: #F23F15;
  }

  .o-price {
    align-self: flex-end;
    padding-left: 0.1rem;
    font-size: 0.27rem;
    text-decoration: line-through;
    color: #808080;
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
