/**
 * Created by zwwill on 2017/8/27.
 */

let utilFunc = {
  initIconFont () {
    let domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
    })
  },
  setBundleUrl (url, jsFile) {
    const bundleUrl = url
    let host = ''
    let path = ''
    let nativeBase
    const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0
    const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0
    if (isAndroidAssets) {
      nativeBase = 'file://assets/dist'
    } else if (isiOSAssets) {
      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1)
    } else {
      const matches = /\/\/([^/]+?)\//.exec(bundleUrl)
      const matchFirstPath = /\/\/[^/]+\/([^/\s]+)\//.exec(bundleUrl)
      if (matches && matches.length >= 2) {
        host = matches[1]
      }
      if (matchFirstPath && matchFirstPath.length >= 2) {
        path = matchFirstPath[1]
      }
      nativeBase = 'http://' + host + '/'
    }
    const h5Base = './index.html?page='
    // in Native
    let base = nativeBase
    if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
      // check if in weexpack project
      if (path === 'web' || path === 'dist') {
        base = h5Base + '/dist/'
      } else {
        base = h5Base + ''
      }
    } else {
      base = nativeBase + (path ? path + '/' : '')
    }

    const newUrl = base + jsFile
    return newUrl
  },
  getUrlSearch (url, name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = url.slice(url.indexOf('?') + 1).match(reg)
    if (r != null) {
      try {
        return decodeURIComponent(r[2])
      } catch (_e) {
        return null
      }
    }
    return null
  },
  env: {
    isTaobao () {
      const { appName } = weex.config.env
      return /(tb|taobao|淘宝)/i.test(appName)
    },
    isTrip () {
      const { appName } = weex.config.env
      return appName === 'LX'
    },
    isBoat () {
      const { appName } = weex.config.env
      return appName === 'Boat' || appName === 'BoatPlayground'
    },
    isWeb () {
      const { platform } = weex.config.env
      return typeof (window) === 'object' && platform.toLowerCase() === 'web'
    },
    isIOS () {
      const { platform } = weex.config.env
      return platform.toLowerCase() === 'ios'
    },
    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX () {
      const { deviceHeight } = weex.config.env
      if (utilFunc.env.isWeb()) {
        return typeof window !== undefined && window.screen && window.screen.width && window.screen.height && (parseInt(window.screen.width, 10) === 375) && (parseInt(window.screen.height, 10) === 812)
      }
      return utilFunc.env.isIOS() && deviceHeight === 2436
    },
    isAndroid () {
      const { platform } = weex.config.env
      return platform.toLowerCase() === 'android'
    },
    isAlipay () {
      const { appName } = weex.config.env
      return appName === 'AP'
    },
    isTmall () {
      const { appName } = weex.config.env
      return /(tm|tmall|天猫)/i.test(appName)
    },
    isAliWeex () {
      return utilFunc.env.isTmall() || utilFunc.env.isTrip() || utilFunc.env.isTaobao()
    },
    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight () {
      const { env } = weex.config
      const navHeight = utilFunc.env.isWeb() ? 0 : (utilFunc.env.isIPhoneX() ? 176 : 132)
      return env.deviceHeight / env.deviceWidth * 750 - navHeight
    },
    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight () {
      const { env } = weex.config
      return env.deviceHeight / env.deviceWidth * 750
    }
  }
}
export default utilFunc
