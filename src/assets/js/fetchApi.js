'use strict'

module.exports = function(api, data) {
  let that = this
  that.axios
      .get(api, {
        params: {
          sn: that.$route.query.sn
        }
      })
      .then(res => {
        console.log(res)
        if (res.data.error === '0') {
          data = res.data.data
        }
      })
}
