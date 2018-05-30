<template>
  <div class="c-detail">
    <div class="profile">
      <detail-profile :profile="profile"></detail-profile>
      <div class="frm">
        <div class="series">所属系列 · 从零到一起飞 Shopify × Facebook</div>
        <div class="flex-row">
          <div class="flex-col">
            <div>
              <i class="icon-yike icon-clock">{{plan.dtm_start}}</i>
              <span :class="profile.status">{{CourseStatus[profile.status]}}</span>
            </div>
            <div class="price">￥{{profile.price}}</div>
          </div>
          <div class="reward flex-col">
            <i class="icon-yike icon-share"></i>
            <div>邀请有奖</div>
          </div>
        </div>
      </div>
      <detail-policy @click="skip"></detail-policy>
    </div>
    <div class="tabs">
      <tabs :items="tabs" :active="activeTab" v-on:switch="switchTab"></tabs>
    </div>
    <div class="teacher">
      <block title="讲师">
        <detail-teacher :teacher="teacher" :profile="profile" :introduce="introduce" @isfollow="follow"
                        :isFollow="isFollow"></detail-teacher>
      </block>
    </div>
    <div class="content">
      <block title="简介">
        <div v-html="introduce.content"></div>
      </block>
    </div>
    <div class="relative" v-if="relative.length !== 0">
      <block title="相关系列课">

      </block>
    </div>
    <div class="rating"></div>
    <div class="promote-rank"></div>
    <div class="contact">
      <DetailContact></DetailContact>
    </div>
    <div class="bar-bottom">
    </div>
  </div>
</template>

<script>
  import {markdown} from 'markdown'
  import CourseStatus from '@/assets/js/courseStatus'
  import Tabs from '@/components/Tabs'
  import Block from '@/components/Block'
  import DetailProfile from '../components/DetailProfile'
  import DetailTeacher from '../components/DetailTeacher'
  import DetailPolicy from '../components/DetailPolicy'
  import DetailContact from '../components/DetailContact'

  export default {
    name: 'lesson-detail',
    components: {markdown, CourseStatus, Tabs, Block, DetailProfile, DetailTeacher, DetailPolicy, DetailContact},
    data() {
      return {
        profile: {},
        plan: {},
        teacher: {},
        introduce: {},
        relative: {},
        activeTab: 'board',
        CourseStatus: '',
        tabs: [
          {'key': 'lesson', name: '课程'},
          {'key': 'board', name: '交流'}
        ],
        isFollow: false
      }
    },

    created() {
      console.log(this.config.assets)
      this.CourseStatus = CourseStatus
      let lessonSn = this.$route.query.sn
      this.api.get('/api/lesson-profile', {
        sn: lessonSn
      }).then((res) => {
          this.profile = res.data
          this.teacher = res.data.teacher
          this.plan = res.data.plan
        }
      )
      this.api.get('/api/lesson-introduce', {
        sn: lessonSn
      }).then((res) => {
        this.introduce = res.data
        this.introduce.content = markdown.toHTML(this.introduce.content)
      })
      this.api.get('/api/lesson-relative', {
        sn: lessonSn
      }).then((res) => {
        this.relative = res.data
      })
    },
    methods: {
      switchTab(key) {
        this.activeTab = key
        console.log('switch', key)
      },
      skip() {
      },
      follow() {
        this.isFollow = !this.isFollow
      }
    }
  }

</script>

<style scoped>
  .finish {
    display: inline-block;
    width: .9rem;
    height: .36rem;
    line-height: .36rem;
    background: #FF7E7E;
    border-radius: .18rem;
    color: #fff;
    font-size: .21rem;
    text-align: center;
  }

  .c-detail {
    padding-bottom: 1.2rem;
  }

  .profile {
    margin-bottom: .3rem;
  }

  .frm {
    padding: 0 .3rem;
    background: #fff;
  }

  .series {
    font-size: .24rem;
    color: #0D0D0D;
    line-height: .36rem;

  }

  .frm > .flex-row {
    justify-content: space-between;
    padding: .3rem 0 .2rem 0;
  }

  .icon-clock {
    color: #808080;
    font-size: .24rem;
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

  .bar-bottom {
    position: fixed;
    bottom: 0;
    height: 1rem;
    width: 7.5rem;
    background: #2F57DA;
  }

  .reward {
    height: 100%;
    color: #666666;
    font-size: .24rem;
  }

  .icon-share {
    color: #2F57DA;
    font-size: .5rem;
  }

  .reward > div {
  }

  .content {
    margin-bottom: .3rem;
    padding-bottom: .3rem;
    background: #fff;
  }
</style>
