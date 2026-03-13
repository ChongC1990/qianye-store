<template>
  <div class="app-container home">
    <!-- 欢迎横幅 -->
    <el-card class="welcome-card">
      <div class="welcome-content">
        <img src="@/assets/logo/logo.jpeg" class="welcome-logo" alt="千叶珠宝" />
        <div class="welcome-text">
          <h1 class="welcome-title">欢迎使用千叶珠宝管理系统</h1>
          <p class="welcome-desc">专注珠宝零售与会员管理，为您提供一站式商城运营解决方案</p>
        </div>
      </div>
    </el-card>

    <!-- 功能入口 -->
    <el-row :gutter="16" class="feature-row">
      <el-col :sm="24" :lg="8" v-for="group in featureGroups" :key="group.title">
        <el-card class="feature-card">
          <template #header>
            <div class="card-header">
              <el-icon class="header-icon"><component :is="group.icon" /></el-icon>
              <span>{{ group.title }}</span>
            </div>
          </template>
          <div
            v-for="item in group.items"
            :key="item.path"
            class="feature-item"
            @click="goTo(item.path)"
          >
            <el-icon class="item-icon"><component :is="item.icon" /></el-icon>
            <span>{{ item.label }}</span>
            <el-icon class="arrow-icon"><ArrowRight /></el-icon>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup name="ViewIndex">
import { useRouter } from 'vue-router'
import {
  ShoppingBag, Goods, List, ShoppingCartFull,
  ChatDotRound, User, Bell, Menu, DataAnalysis,
  Setting, UserFilled, Operation, Monitor, Timer,
  ArrowRight, GoodsFilled
} from '@element-plus/icons-vue'

const router = useRouter()

const featureGroups = [
  {
    title: '商城管理',
    icon: 'ShoppingBag',
    items: [
      { label: '商品分类', path: '/mall/goodscategory', icon: 'Goods' },
      { label: '商品管理', path: '/mall/goodsspu', icon: 'GoodsFilled' },
      { label: '订单管理', path: '/mall/orderinfo', icon: 'List' },
      { label: '购物车管理', path: '/mall/shoppingcart', icon: 'ShoppingCartFull' },
    ]
  },
  {
    title: '微信运营',
    icon: 'ChatDotRound',
    items: [
      { label: '小程序用户', path: '/wxma/wxuser', icon: 'User' },
      { label: '公众号用户', path: '/wxmp/wxuser', icon: 'UserFilled' },
      { label: '消息管理', path: '/wxmp/wxmsg', icon: 'Bell' },
      { label: '营销统计', path: '/wxmp/wxsummary', icon: 'DataAnalysis' },
    ]
  },
  {
    title: '系统管理',
    icon: 'Setting',
    items: [
      { label: '用户管理', path: '/system/user', icon: 'UserFilled' },
      { label: '角色管理', path: '/system/role', icon: 'Operation' },
      { label: '服务监控', path: '/monitor/server', icon: 'Monitor' },
      { label: '定时任务', path: '/monitor/job', icon: 'Timer' },
    ]
  }
]

function goTo(path) {
  router.push(path)
}
</script>

<style lang="scss" scoped>
.app-container { padding: 20px; background: #f5fafa; min-height: 100%; }

.welcome-card {
  background: linear-gradient(135deg, #2c4a4a 0%, #3a6060 100%);
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(74, 183, 189, 0.2);

  :deep(.el-card__body) { padding: 28px 32px; }
}

.welcome-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.welcome-logo {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 2px solid rgba(74, 183, 189, 0.6);
  box-shadow: 0 0 16px rgba(74, 183, 189, 0.35);
  object-fit: cover;
  flex-shrink: 0;
}

.welcome-title {
  margin: 0 0 6px 0;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 1px;
}

.welcome-desc {
  margin: 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
}

.feature-row { margin-top: 16px; }

.feature-card {
  border-radius: 12px;
  border: 1px solid rgba(74, 183, 189, 0.15);
  background: #ffffff;
  box-shadow: 0 2px 12px rgba(74, 183, 189, 0.08);
  transition: box-shadow 0.25s;

  &:hover {
    box-shadow: 0 6px 24px rgba(74, 183, 189, 0.18);
  }

  :deep(.el-card__header) {
    border-bottom: 1px solid rgba(74, 183, 189, 0.12);
    padding: 14px 18px;
    background: rgba(74, 183, 189, 0.04);
    border-radius: 12px 12px 0 0;
  }
  :deep(.el-card__body) { padding: 8px 0; }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: #2c4a4a;
}

.header-icon { font-size: 18px; color: #4AB7BD; }

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 18px;
  font-size: 14px;
  color: #4a6060;
  cursor: pointer;
  border-bottom: 1px solid rgba(74, 183, 189, 0.06);
  transition: background 0.2s, color 0.2s;

  &:last-child { border-bottom: none; }

  &:hover {
    background: rgba(74, 183, 189, 0.06);
    color: #4AB7BD;

    .item-icon { color: #4AB7BD; }
    .arrow-icon { opacity: 1; transform: translateX(3px); }
  }
}

.item-icon { color: rgba(74,183,189,0.5); font-size: 16px; flex-shrink: 0; }

.arrow-icon {
  margin-left: auto;
  font-size: 13px;
  color: #4AB7BD;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
}
</style>
