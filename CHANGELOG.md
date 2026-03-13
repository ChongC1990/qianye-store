# CHANGELOG - 千叶珠宝管理系统

## [1.0.3] - 2026-03-13

### Added
- 小程序 AppID 配置：`wx90d04cb5be0b72d5`
- 小程序 Secret 写入后端 `application.yml`
- `project.config.json` 更新 appid 及项目名为「千叶珠宝小程序」
- `env.js` 关闭广告、添加真机调试地址注释（192.168.31.240:7500）

---

## [1.0.2] - 2026-03-13

### Changed
- 整体配色从黑金改为 Tiffany绿（#4AB7BD）+ 灰白风格
- 登录页：浅绿渐变背景 + 白色卡片 + 绿色圆环logo
- 侧边栏：深绿 #2c4a4a 底色 + 白色菜单文字
- Element Plus 全局主色同步为 Tiffany绿

### Fixed
- 首页功能卡片无法点击：全部绑定路由，hover 可跳转，增加箭头引导

---

## [1.0.1] - 2026-03-13

### Changed
- 系统名称：`JooLun微信管理系统` → `千叶珠宝管理系统`
- 主题色：蓝色系 → 黑金配色（#1a1a1a + #c9a84c）
- 侧边栏：换用千叶珠宝 logo，金色文字
- 登录页：黑金背景渐变、logo 圆形展示、去除 JooLun 版权信息
- 后端系统名改为「千叶珠宝」

### Removed
- 首页所有 JooLun 广告、推广内容、外链按钮
- 登录页底部 JooLun 版权链接

---

## [1.0.0] - 2026-03-13

### Added
- 基于 JooLun-wx v3.8.8 初始化千叶珠宝项目
- 后端：Spring Boot 3 + MyBatis Plus + WxJava
- 前端：Vue3 + Element-Plus + Avue3
- 小程序端：微信原生框架 + Color UI
- 创建 GitHub 仓库 ChongC1990/qianye-store 并完成首次 push
