<template>
  <div class="c-user">
    <div class="frm-user flex-col">
      <img class="logo" :src="app.linkToAssets('/img/logo/logo@3x.png')">
      <!--<img class="refresh" :src="app.linkToAssets('/img/lesson/refresh@3x.png')" @click="refresh($event)">-->
      <div class="userinfo flex-col">
        <div class="avatar">
          <img :src="user.avatar">
        </div>
        <div class="nickname font-medium" v-text="user.name"></div>
      </div>
    </div>
    <ul>
      <li class="flex-row" v-for="(user,index) in users" :key="index" @click="turnTo(user.path)">
        <div class="flex-row">
          <i :class="user.icon" class="icon icon-yike"></i>
          <span class="font-medium" v-text="user.text"></span>
        </div>
        <i class="icon-yike icon-arrow-r"></i>
      </li>
    </ul>
    <ul>
      <li class="flex-row" v-for="(item,index) in feedback" :key="index" @click="turnTo(item.path)">
        <div class="flex-row">
          <i :class="item.icon" class="icon icon-yike"></i>
          <span class="font-medium" v-text="item.text"></span>
        </div>
        <i class="icon-yike icon-arrow-r"></i>
      </li>
    </ul>
    <navigation></navigation>
  </div>
</template>

<script>
  import Navigation from "../../components/Navigation";

  export default {
    name: "Home",
    components: {
      Navigation
    },
    data() {
      return {
        user: {},
        users: [
          {
            icon: 'icon-enrolled-course',
            text: '已报名课程',
            path: this.app.linkToStudent('/?v=1#/user/enrolled')
          },
          // {
          //   icon: 'icon-enrolled-teacher',
          //   text: '已关注讲师',
          //   path: this.app.linkToStudent('/?v=1#/user/follow')
          // },
          {
            icon: 'icon-money',
            text: '账户资金',
            path: this.app.linkToStudent('/?v=1#/user/money')
          },
          {
            icon: 'icon-discount',
            text: '兑换优惠券',
            path: this.app.linkToStudent('/?v=1#/user/money/coupon')
          }
        ],
        feedback: [
          {icon: 'icon-feedback', text: '建议与反馈', path: this.app.linkToStudent('/?v=1#/user/advise')},
          {icon: 'icon-enroll-teacher', text: '注册成为讲师', path: ''},
          {icon: 'icon-aboutus', text: '关于我们', path: this.app.linkToStudent('/?v=1#/user/about')}
        ]
      }
    },
    created() {
      this.api.get('/api/user-profile').then((res) => {
        this.user = res.data
      }, this.api.onErrorSign)
    },
    methods: {
      refresh(e) {
        if (e.target.className === 'refresh') {
          e.target.className = 'refresh-active'
        } else {
          e.target.className = 'refresh'
        }
      },
      turnTo(path) {
        window.location.href = path
      }
    }
  }
</script>

<style scoped>
  .c-user {
    height: auto;
    padding-bottom: 1.1rem;
  }

  .frm-user {
    width: 100%;
    height: 3rem;
    background: #565AD1;
    background-image: linear-gradient(50deg, transparent 20%, rgba(106, 213, 255, .1) 20%, rgba(106, 213, 255, .04) 55%, rgba(82, 87, 208, 0.01) 55%),
    linear-gradient(125deg, rgba(106, 213, 255, .1) 20%, transparent 20%, transparent 60%, rgba(106, 213, 255, .08) 60%, rgba(106, 213, 255, .08) 97%, transparent 97%),
    linear-gradient(-130deg, rgba(255, 255, 255, .8) 0%, rgba(255, 255, 255, .1) 80%, transparent 80%);
    /*linear-gradient(to right, transparent -10%, #fff 155%);*/
  }

  .logo {
    position: absolute;
    top: .3rem;
    left: .3rem;
    width: 1.8rem;
    height: .42rem;
  }

  .refresh {
    position: absolute;
    top: .3rem;
    right: .3rem;
    width: .7rem;
    height: .7rem;
  }

  .refresh-active {
    position: absolute;
    top: .3rem;
    right: .3rem;
    width: .7rem;
    height: .7rem;
    animation: fresh 1s infinite linear;
  }

  .userinfo {
    height: 100%;
    padding-top: .7rem;
  }

  .avatar {
    width: 1.28rem;
    height: 1.28rem;
    border: .01rem solid #c1c1c1;
    border-radius: 50%;
  }

  .avatar > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .nickname {
    padding-top: .27rem;
    text-align: center;
    color: #fff;
    font-size: .32rem;
  }

  ul {
    margin: .4rem 0;
    padding: 0 .37rem 0 .32rem;
    list-style: none;
    border-top: 0.01rem solid #D9D9D9;
    border-bottom: 0.01rem solid #D9D9D9;
    background: white;
  }

  li {
    border-bottom: 0.01rem solid #D9D9D9;
    padding: .165rem 0;
    justify-content: space-between;
  }

  li:last-child {
    border-bottom: 0;
    padding: .17rem 0;
  }

  .icon-arrow-r {
    color: #808080;
  }

  .icon-enrolled-course {
    background: linear-gradient(to right, #2C51F2, #8585FE);
    font-size: .5rem;
  }

  .icon-enrolled-teacher {
    background: linear-gradient(to right, #B3A2FF, #E1B9FF);
    font-size: .5rem;
  }

  .icon-money {
    background: linear-gradient(to right, #FF9E04, #FFD027);
    font-size: .5rem;
  }

  .icon-discount {
    background: linear-gradient(to top, #FF7CA4, #FEACB2 60%);
    font-size: .5rem;
  }

  .icon-feedback {
    background: linear-gradient(to right, #42C25F, #54E269);
    font-size: .5rem;
  }

  .icon-enroll-teacher {
    background: linear-gradient(to right, #8C61F7, #AD99F7);
    font-size: .5rem;
  }

  .icon-aboutus {
    background: linear-gradient(to right, #659AFA, #71C2FF);
    font-size: .5rem;
  }

  .icon {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-right: .36rem;
  }

  .icon + span {
    font-size: .32rem;
    color: #0D0D0D;
    padding-bottom: .03rem;
  }

  @keyframes fresh {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
</style>
