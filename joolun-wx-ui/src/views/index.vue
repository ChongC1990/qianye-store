<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <!-- 欢迎卡片 -->
      <el-col :span="24">
        <el-card class="welcome-card">
          <div class="welcome-content">
            <img src="@/assets/logo/logo.jpeg" class="welcome-logo" alt="千叶珠宝" />
            <div class="welcome-text">
              <h1 class="welcome-title">欢迎使用千叶珠宝管理系统</h1>
              <p class="welcome-desc">专注珠宝零售与会员管理，为您提供一站式商城运营解决方案</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px">
      <!-- 快捷入口 -->
      <el-col :sm="24" :lg="8">
        <el-card class="feature-card">
          <template #header>
            <div class="card-header">
              <el-icon class="header-icon"><ShoppingBag /></el-icon>
              <span>商城管理</span>
            </div>
          </template>
          <ul class="feature-list">
            <li><el-icon><Goods /></el-icon> 商品分类管理</li>
            <li><el-icon><GoodsFilled /></el-icon> 商品上架与编辑</li>
            <li><el-icon><List /></el-icon> 订单处理与跟踪</li>
            <li><el-icon><ShoppingCartFull /></el-icon> 购物车数据分析</li>
          </ul>
        </el-card>
      </el-col>

      <el-col :sm="24" :lg="8">
        <el-card class="feature-card">
          <template #header>
            <div class="card-header">
              <el-icon class="header-icon"><ChatDotRound /></el-icon>
              <span>微信运营</span>
            </div>
          </template>
          <ul class="feature-list">
            <li><el-icon><User /></el-icon> 小程序用户管理</li>
            <li><el-icon><Bell /></el-icon> 公众号消息管理</li>
            <li><el-icon><Menu /></el-icon> 自定义菜单配置</li>
            <li><el-icon><DataAnalysis /></el-icon> 营销数据统计</li>
          </ul>
        </el-card>
      </el-col>

      <el-col :sm="24" :lg="8">
        <el-card class="feature-card">
          <template #header>
            <div class="card-header">
              <el-icon class="header-icon"><Setting /></el-icon>
              <span>系统管理</span>
            </div>
          </template>
          <ul class="feature-list">
            <li><el-icon><UserFilled /></el-icon> 用户与角色权限</li>
            <li><el-icon><Operation /></el-icon> 部门与岗位管理</li>
            <li><el-icon><Monitor /></el-icon> 服务器监控</li>
            <li><el-icon><Timer /></el-icon> 定时任务管理</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup name="ViewIndex">
</script>

<style lang="scss" scoped>
.app-container { padding: 20px; }

.welcome-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid rgba(201, 168, 76, 0.3);
  :deep(.el-card__body) { padding: 30px; }
}

.welcome-content {
  display: flex;
  align-items: center;
  gap: 24px;
}

.welcome-logo {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid #c9a84c;
  box-shadow: 0 0 16px rgba(201, 168, 76, 0.4);
  object-fit: cover;
  flex-shrink: 0;
}

.welcome-title {
  margin: 0 0 8px 0;
  font-size: 22px;
  font-weight: 700;
  color: #c9a84c;
  letter-spacing: 1px;
}

.welcome-desc {
  margin: 0;
  font-size: 14px;
  color: rgba(201, 168, 76, 0.6);
}

.feature-card {
  margin-top: 0;
  background: #1a1a1a;
  border: 1px solid rgba(201, 168, 76, 0.2);
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: rgba(201, 168, 76, 0.5);
    box-shadow: 0 4px 20px rgba(201, 168, 76, 0.15);
  }

  :deep(.el-card__header) {
    border-bottom: 1px solid rgba(201, 168, 76, 0.15);
    padding: 14px 20px;
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: #c9a84c;
}

.header-icon {
  font-size: 18px;
  color: #c9a84c;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    border-bottom: 1px solid rgba(255,255,255,0.04);
    transition: color 0.2s;

    &:last-child { border-bottom: none; }
    &:hover { color: #c9a84c; }

    .el-icon { color: rgba(201, 168, 76, 0.6); font-size: 15px; }
  }
}
</style>
