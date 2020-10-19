import {
  urlDomain,
  getMapCode
} from '@apply/utils/constants';

// 兜底默认配置
// mapcode用最全的要素生成，包含借款需要的要素
const config = {
  theme: '<%= theme %>', // 主题色
  OLD_WEB_MODULE: '<%= OLD_WEB_MODULE %>', // 旧前端模块
  LOAN_URL: `${urlDomain}/<%= channel %>/loan/#/pages/index/index?mapCode=${getMapCode()}`, // 借款链接
  OLD_APPLY_URL: `${urlDomain}/vmuwechat/#/apply/dispatch`, // 旧申请链接
  WEAPP_RELOGIN_REDIRECT_URL: '/pages/index/index', // 小程序重新登录链接
  NEW_APPLY_URL: () => `${urlDomain}/<%= channel %>/apply/#/pages/index/index?mapCode=${getMapCode()}`, // 新申请链接
  NEW_APPLY_PATH: () => `/pages/index/index?mapCode=${getMapCode()}`, // 新申请链接路径
  goWechatLogin: (redirectUrl) => window.location.replace(`${urlDomain}/vmuwechat/#/auth?channel=<%= channel %>&redirect_url=${redirectUrl}`),
  applyShowHelp: <%= applyShowHelp %>, // false 申请流程是否展示“遇到问题”
  emitHelpEvent: <%= emitHelpEvent %>, // true 实名卡片参数-是否触发帮助点击事件，是则在活体失败页显示“遇到问题？”按钮
  photoUseSdk: <%= photoUseSdk %>, // false 实名卡片参数-拍照是否使用sdk
  videoUseSdk: <%= videoUseSdk %>, // false 实名卡片参数-录制视频使用sdk
  bioLoadingSpinner: <%= bioLoadingSpinner %>, // false 仅H5渠道使用的静态属性，活体加载页样式true-加载中logo，false-动画页
  WXOAUTH_URL: `${urlDomain}/vmuwechat/#/auth/wxapp-oauth?channel=<%= channel %>`, // 小程序跳h5登录中转
  SUPPLY_BIO_URL: `${urlDomain}/vmuwechat/#/supply-bio/supply-photo?channel=<%= channel %>`, // 老系统身份信息补全页面
  CHANGE_MOBILE: `${urlDomain}/<%= channel %>/safecenter/#/apply-reset-phone/index`, // 有额度用户实名不一致修改手机号
  SET_PASSWORD_URL: `${urlDomain}/<%= channel %>/safecenter/#/member/reset-password/now-phone-check`, // 设置交易密码
  MAIN_PAGE_URL: `${urlDomain}/<%= channel %>/mainpage/#/credit/index?channel=<%= channel %>`, // 额度首页
  showProgress: <%= showProgress %>, // true 申请流程是否展示进度条
  showBrand: <%= showBrand %>, // false 申请流程是否展示品牌信息
  enableBrowserBackup: <%= enableBrowserBackup %>, // true h5兜底拍照方案是否启用
  enableAuthPopup: <%= enableAuthPopup %>, // false 拍照授权弹窗是否启用
  HELP_URL: `${urlDomain}/static/helpdesk/pages/faq/index.html?from=apply&channel=<%= channel %>&faqKey=${encodeURIComponent('申请问题')}`
};

export default config;
