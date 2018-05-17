/**
 * Author: LyonWong
 * Date: 2018-03-24
 */

let app = {
  signIn: () => {
    window.location.href = '/sign-in?callbackURI=' + encodeURIComponent(window.location.href)
  }
}

export default app
