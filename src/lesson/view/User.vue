<template>
  <div class="c-user">
    <div class="frm-user flex-col">
      <div class="userinfo">
        <div class="avatar">
          <!--<img :src="user.avatar">-->
        </div>
        <div class="nickname font-medium">asda</div>
      </div>
    </div>
    <ul>
      <li class="flex-row" v-for="(item,index) in userinfo" :key="index">
        <div class="flex-row">
          <i :class="item.icon"></i>
          <span class="font-medium" v-text="item.text"></span>
        </div>
        <i class="icon-yike icon-arrow-r"></i>
      </li>
    </ul>
    <ul>
      <li class="flex-row" v-for="(item,index) in feedback" :key="index">
        <div class="flex-row">
          <i :class="item.icon"></i>
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
    name: "User.vue",
    components: {
      Navigation
    },
    data() {
      return {
        user: null,
        userinfo: [
          {icon: 'icon icon-yike icon-enrolled-course', text: '已报名课程'},
          {icon: 'icon icon-yike icon-enrolled-teacher', text: '已关注讲师'},
          {icon: 'icon icon-yike icon-money', text: '账户资金'},
          {icon: 'icon icon-yike icon-discount', text: '兑换优惠券'}
        ],
        feedback: [
          {icon: 'icon icon-yike icon-feedback', text: '建议与反馈'},
          {icon: 'icon icon-yike icon-enroll-teacher', text: '注册成为讲师'},
          {icon: 'icon icon-yike icon-aboutus', text: '关于我们'}
        ]
      }
    },
    created() {
      this.api.get('/api/user', {
        usn: this.tusn
      }).then((res) => {
        this.user = res.data
      })
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
    height: 3.01rem;
    background: #5257D0;
    background-image: linear-gradient(50deg, transparent 20%, rgba(106, 213, 255, .1) 20%, rgba(106, 213, 255, .1) 55%, transparent 55%),
    linear-gradient(125deg, rgba(106, 213, 255, .1) 20%, transparent 20%, transparent 60%, rgba(106, 213, 255, .1) 60%, transparent 98%, rgba(106, 213, 255, .1) 98%);
  }

  .userinfo {
    height: 100%;
    padding-top: .7rem;
  }

  .avatar {
    width: 1.28rem;
    height: 1.28rem;
    border: 1px solid #fff;
    border-radius: 50%;
  }

  .nickname {
    padding-top: .27rem;
    text-align: center;
    color: #fff;
    font-size: .4rem;
  }

  ul {
    margin: .4rem 0;
    padding: 0 .37rem 0 .32rem;
    list-style: none;
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
    background: white;
  }

  li {
    border-bottom: 1px solid #D9D9D9;
    padding: .21rem 0;
    justify-content: space-between;
  }

  li:last-child {
    border-bottom: 0;
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

</style>
