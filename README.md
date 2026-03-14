# 千叶珠宝 · 管理系统

> **来我心里 · 以珠宝传递情感**

基于 [JooLun-wx](https://gitee.com/joolun/JooLun-wx) 二次开发的珠宝电商管理平台，涵盖后台管理系统、小程序商城和服务端 API，专为千叶珠宝品牌定制。

---

## 项目结构

| 目录 | 说明 |
|------|------|
| `joolun-wx` | Java 后端服务（Spring Boot 3） |
| `joolun-wx-ui` | 后台管理前端（Vue3 + Element-Plus） |
| `joolun-wx-ma` | 微信小程序商城端 |

---

## 技术栈

**后端**
- Spring Boot 3 + Spring Security + JWT
- MyBatis Plus + MySQL
- Redis + WxJava SDK

**前端**
- Vue3 + Element-Plus + Avue3

**小程序**
- 微信原生框架 + Color UI
- AppID：`wx90d04cb5be0b72d5`

---

## 线上环境

| 服务 | 地址 |
|------|------|
| 后台管理 | http://221.237.11.62:10087 |
| 后端 API | http://221.237.11.62:10087/prod-api |
| 后端端口 | 7500 |

---

## 商城功能

- 🛍️ 商品管理（SPU/SKU）
- 📦 订单管理与跟踪
- 🗂️ 珠宝分类：钻石 / 黄金 / 珍珠 / 18K金 / 情侣对戒
- 🛒 购物车 & 收货地址
- 👤 小程序用户管理
- 💬 微信公众号管理（消息/菜单/素材/自动回复）
- 📊 营销数据统计
- ⚙️ 系统配置（角色/权限/菜单/字典）

---

## 本地启动

### 环境要求

- JDK 17
- MySQL ≥ 5.7
- Redis
- Maven ≥ 3.0
- Node.js ≥ 16

### 后端

```bash
cd joolun-wx
mvn clean package -DskipTests

JAVA_HOME=/opt/homebrew/opt/openjdk@17 \
  java -jar joolun-admin/target/joolun-admin.jar
```

### 前端

```bash
cd joolun-wx-ui
npm install
npm run dev
```

### 小程序

使用微信开发者工具导入 `joolun-wx-ma` 目录，AppID 填写 `wx90d04cb5be0b72d5`。

---

## 部署（服务器）

```bash
# 重新编译
cd joolun-wx
JAVA_HOME=/opt/homebrew/opt/openjdk@17 \
  mvn clean package -DskipTests

# 上传 jar 并重启（服务器 221.237.11.62）
scp joolun-admin/target/joolun-admin.jar cheung.chen@221.237.11.62:~/app/
ssh cheung.chen@221.237.11.62 'sudo systemctl restart joolun'
```

---

## 版本记录

详见 [CHANGELOG.md](./CHANGELOG.md)

| 版本 | 日期 | 主要内容 |
|------|------|---------|
| v1.0.6 | 2026-03-14 | 修复未登录用户无法浏览商品/分类 |
| v1.0.5 | 2026-03-14 | 小程序首页品牌化改造（金色主题、珠宝分类图标） |
| v1.0.4 | 2026-03-14 | 服务器部署完成，注入珠宝商品数据 |
| v1.0.3 | 2026-03-13 | 微信小程序 AppID/Secret 配置 |
| v1.0.2 | 2026-03-13 | 后台配色改为 Tiffany 绿风格 |
| v1.0.1 | 2026-03-13 | 品牌化改造，系统更名为千叶珠宝 |
| v1.0.0 | 2026-03-13 | 基于 JooLun-wx 初始化项目 |

---

## License

MIT
