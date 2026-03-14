/**
 * Copyright (C) 2018-2019
 * All rights reserved, Designed By www.joolun.com
 * 注意：
 * 本软件为www.joolun.com开发研制，项目使用请保留此说明
 */
export default {
  //服务器地址：已部署到公网
  basePath: 'http://221.237.11.62:10087/prod-api',
  //小程序直接走 nginx → 后端，prod-api 由 nginx 代理去掉前缀
  //广告开关（暂时关闭）
  adEnable: false,
  adBannerID: '',
  adInsertScreenID: '',
  adIncentiveID: '',
}