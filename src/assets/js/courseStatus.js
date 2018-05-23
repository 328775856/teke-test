import Vue from "vue"

export default {
  f: () => {
    Vue.filter('courseStatus', (value) => {
      let msg = {
        "finish": '可回放',
        "onlive": '开课中',
        'repose': "未开课"
      }
      return msg[value]
    })
  }
}
