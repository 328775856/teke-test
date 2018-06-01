<template>
  <div class="c-detail">
    <div class="profile">
      <detail-cover :profile="profile"></detail-cover>
      <div class="frm-profile">
        <div class="title">{{profile.title}}</div>
        <div class="series" v-if="profile.series">{{profile.series.name}}</div>
        <div class="datum flex-row">
          <div class="flex-col">
            <div class="flex-row" v-if="profile.plan">
              <i class="icon-yike icon-clock"></i>
              <div class="time">{{profile.plan.dtm_start}}</div>
              <status-label :status="profile.status"/>
            </div>
            <div class="price">￥{{profile.price}}</div>
          </div>
          <div class="invite flex-col click" @click="share">
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
    <!--<<<<<<< HEAD-->
    <!--<div v-if="activeTab === 'lesson'">-->
    <!--<div class="teacher">-->
    <!--<block title="讲师">-->
    <!--<detail-teacher :teacher="teacher" :profile="profile" :introduce="introduce"-->
    <!--:isFollow="isFollow"></detail-teacher>-->
    <!--</block>-->
    <!--</div>-->
    <!--<div class="content">-->
    <!--<block title="简介">-->
    <!--<div v-html="markdown(introduce.content)"></div>-->
    <!--</block>-->
    <!--</div>-->
    <!--=======-->
    <div class="teacher">
      <block title="讲师">
        <detail-teacher :tusn="profile.teacher.sn" v-if="profile.teacher"></detail-teacher>
      </block>
    </div>
    <div class="content">
      <block title="简介">
        <div v-html="markdown(introduce.content)"></div>
      </block>
    </div>
    <div class="relative" v-if="relative.length">
      <block title="相关系列课">
        <div slot="more">
          <span>查看完整课程</span>
          <i class="icon-yike icon-arrow-r"></i>
        </div>
        <lesson-cell :lesson="item" v-for="(item,index) in relative" :key="index"></lesson-cell>
      </block>
    </div>
    <div class="rating">
      <block title="评分">
        <div slot="more" class="click" v-if="rating.stats">已有{{rating.stats.turnout}}人评价<i
          class="icon-yike icon-arrow-r"></i></div>
        <div slot="score" v-if="rating.stats" class="score">({{rating.stats.score
          ===0?0:rating.stats.score.toFixed(1)}})
        </div>
      </block>
      <rating v-for="rate in rating.list" :rate="rate" :key="rate.id"></rating>
    </div>
    <div class="promote-rank"></div>
    <div class="contact">
      <DetailContact></DetailContact>
    </div>
    <div class="control flex-row">
      <div class="ctrl-home flex-col ctrl-icon">
        <i class="icon-yike icon-home"></i>
        <span>首页</span>
      </div>
      <div class="ctrl-refund flex-col ctrl-text" @click="refund" v-if="personal.refund !== 'forbid'">退款</div>
      <div class="ctrl-refund flex-item flex-col ctrl-text" v-if="personal.status === 'refund'">已退款</div>
      <div class="ctrl-enroll flex-item flex-col ctrl-text" @click="enroll" v-if="personal.status === 'fresh'">立即报名
      </div>
      <div class="ctrl-access flex-item flex-col ctrl-text" @click="access" v-if="canAccess">进入课堂</div>
    </div>
    <detail-order :order="order" v-on:cancel="cancelEnroll" v-on:confirm="confirmEnroll"
                  :orderShow="orderShow"></detail-order>
  </div>
</template>

<script>
  import {markdown} from 'markdown'
  import Tabs from '@/components/Tabs'
  import Block from '@/components/Block'
  import DetailCover from '../components/DetailCover'
  import DetailTeacher from '../components/DetailTeacher'
  import DetailPolicy from '../components/DetailPolicy'
  import DetailContact from '../components/DetailContact'
  import DetailOrder from '../components/DetailOrder'
  import StatusLabel from '../components/unit/StatusLabel'
  import Rating from '../components/Rating'

  import LessonCell from '../components/unit/Cell'

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
      Rating,
      LessonCell
    },
    data() {
      return {
        profile: {},
        teacher: {},
        introduce: {},
        relative: [],
        personal: {},
        rating: {},
        activeTab: 'lesson',
        CourseStatus: '',
        tabs: [
          {'key': 'lesson', name: '课程'},
          {'key': 'board', name: '交流'}
        ],
        order: null,
        isFollow: false,
        orderShow: false
      }
    },
    created() {
      this.api.get('/api/jweixin-config').then((res) => {
        // res.data.jsApiList = []
        this.wx.config(res.data)
      })
      let lessonSn = this.$route.query.sn
      this.api.get('/api/lesson-profile', {
        sn: lessonSn
      }).then((res) => {
          this.profile = res.data
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
      // this.enroll()
      this.api.get('/api/personal-lesson', {
        sn: lessonSn
      }).then((res) => {
        this.personal = res.data
      }).catch(console.log)
    },
    computed: {
      canAccess() {
        return true
      }
    },
    methods: {
      markdown(text) {
        return markdown.toHTML(text || '');
      },
      switchTab(key) {
        this.activeTab = key
        switch (key) {
          case 'board':
            window.location.href = this.student(`/?v=1#/course/message/${this.$route.query.sn}/discuss`)
            break;
          default:
            break;
        }
      },
      showPolicy() {
      },
      enroll() {
        this.api.post('/api/order-book-lesson', {
          sn: this.$route.query.sn
        }).then((res) => {
          this.order = res.data
        }, this.api.onErrorSign)
      },
      purchase() {
      },
      cancel() {
        this.orderShow = !this.orderShow
      },
      confirmEnroll() {
        this.api.post('/api/order-prepay-wxm', {
          sn: this.order.sn
        }).then((res) => {
          this.wx.chooseWXPay({
            timestamp: res.data.timeStamp,
            nonceStr: res.data.nonceStr,
            package: res.data.package,
            signType: res.data.signType,
            paySign: res.data.paySign,
            success: function (r) {
            }
          })
        })
      },
      cancelEnroll() {
        this.order = null
      },
      share() {
      },
      refund() {
      }
    },
    watch: {
      activeTab: {
        handler(newValue, oldValue) {
          if (newValue === 'lesson') {
          }
          if (newValue === 'board') {
            window.scrollTo(0, document.getElementsByClassName('tabs')[0].offsetTop)
          }
        }
      }
    }
  }
</script>

<style scoped>
  .frm-profile, .content, .relative, .rating {
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

  .price {
    display: flex;
    justify-content: flex-start;
    width: 105%;
    color: #F23F15;
    font-size: .42rem;
  }

  .control {
    position: fixed;
    bottom: 0;
    height: 1rem;
    width: 7.5rem;
    font-size: .32rem;
  }

  .control > div {
    height: 100%;
  }

  .ctrl-icon {
    font-size: .2rem;
    color: #666;
    background: #fff;
  }

  .ctrl-icon > i {
    font-size: .32rem;
    color: #2F57DA;
    padding: 0 .32rem;
  }

  .ctrl-text {
    padding: 0 .32rem;
  }

  .ctrl-enroll {
    color: #fff;
    background: #2F57DA;
  }

  .relative .icon-arrow-r, .rating .icon-arrow-r {
    color: #808080;
    font-size: .24rem;
    font-weight: bold;
    padding-left: .189rem;
  }

  .ctrl-access {
    color: #fff;
    background: #2F57DA;
  }

  .ctrl-refund {
    background: #fff;
  }

  .tabs {
    position: sticky;
    top: 0;
  }

  .score {
    height: .36rem;
    line-height: .36rem;
    font-size: .32rem;
    font-weight: bold;
  }

  .rating {
    margin-top: .3rem;
  }

  .contact {
    margin-top: .3rem;
  }

  .bar-bottom {
    position: fixed;
    bottom: 0;
    height: 1rem;
    width: 7.5rem;
    background: #fff;
    box-shadow: 0 0 0.1rem rgba(0, 0, 0, .1);
  }

  .bar-bottom > .flex-row {
    justify-content: space-between;
    height: 100%;
  }

  .icon-favorite, .icon-home {
    flex-grow: 1;
    font-size: .2rem;
    color: #666666;
  }

  .icon-favorite:before, .icon-home:before {
    font-size: .37rem;
    color: #2A4EC4;
  }

  .enroll {
    width: 5.5rem;
    height: 100%;
    background: #2F57DA;
    color: #FFFFFF;
    font-size: .32rem;
  }
</style>
<style>
  .click {
    -webkit-tap-highlight-color: transparent;
  }

  .relative .c-relative-block:last-child {
    border-bottom: 0;
  }

  .active .icon-star:before {
    color: #FFC600;
  }
</style>
