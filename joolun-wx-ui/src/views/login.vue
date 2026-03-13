<template>
  <div class="login">
    <div class="login-brand">
      <img src="@/assets/logo/logo.jpeg" class="login-brand-logo" alt="千叶珠宝" />
    </div>
    <el-form
      ref="loginRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <h3 class="title">千叶珠宝管理系统</h3>
      <p class="subtitle">QIANYE JEWELRY MANAGEMENT</p>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          size="large"
          auto-complete="off"
          placeholder="账号"
        >
          <template #prefix>
            <svg-icon icon-class="user" class="el-input__icon input-icon" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          size="large"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter="handleLogin"
        >
          <template #prefix>
            <svg-icon icon-class="password" class="el-input__icon input-icon" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="code" v-if="captchaEnabled">
        <el-input
          v-model="loginForm.code"
          size="large"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter="handleLogin"
        >
          <template #prefix>
            <svg-icon icon-class="validCode" class="el-input__icon input-icon" />
          </template>
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" @click="getCode" class="login-code-img" />
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin: 0px 0px 25px 0px">
        记住密码
      </el-checkbox>
      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          size="large"
          type="primary"
          style="width: 100%"
          @click.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
        <div style="float: right" v-if="register">
          <router-link class="link-type" :to="'/register'">立即注册</router-link>
        </div>
      </el-form-item>
    </el-form>
    <div class="el-login-footer">
      <span>Copyright © 2024 千叶珠宝 All Rights Reserved.</span>
    </div>
  </div>
</template>

<script setup>
import { getCodeImg } from "@/api/login";
import Cookies from "js-cookie";
import { encrypt, decrypt } from "@/utils/jsencrypt";
import useUserStore from "@/store/modules/user";

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();
const { proxy } = getCurrentInstance();

const loginForm = ref({
  username: "admin",
  password: "admin123",
  rememberMe: false,
  code: "",
  uuid: "",
});

const loginRules = {
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }],
};

const codeUrl = ref("");
const loading = ref(false);
const captchaEnabled = ref(true);
const register = ref(false);
const redirect = ref(undefined);

watch(
  route,
  (newRoute) => {
    redirect.value = newRoute.query && newRoute.query.redirect;
  },
  { immediate: true }
);

function handleLogin() {
  proxy.$refs.loginRef.validate((valid) => {
    if (valid) {
      loading.value = true;
      if (loginForm.value.rememberMe) {
        Cookies.set("username", loginForm.value.username, { expires: 30 });
        Cookies.set("password", encrypt(loginForm.value.password), { expires: 30 });
        Cookies.set("rememberMe", loginForm.value.rememberMe, { expires: 30 });
      } else {
        Cookies.remove("username");
        Cookies.remove("password");
        Cookies.remove("rememberMe");
      }
      userStore
        .login(loginForm.value)
        .then(() => {
          const query = route.query;
          const otherQueryParams = Object.keys(query).reduce((acc, cur) => {
            if (cur !== "redirect") { acc[cur] = query[cur]; }
            return acc;
          }, {});
          router.push({ path: redirect.value || "/", query: otherQueryParams });
        })
        .catch(() => {
          loading.value = false;
          if (captchaEnabled.value) { getCode(); }
        });
    }
  });
}

function getCode() {
  getCodeImg().then((res) => {
    captchaEnabled.value = res.captchaEnabled === undefined ? true : res.captchaEnabled;
    if (captchaEnabled.value) {
      codeUrl.value = "data:image/gif;base64," + res.img;
      loginForm.value.uuid = res.uuid;
    }
  });
}

function getCookie() {
  const username = Cookies.get("username");
  const password = Cookies.get("password");
  const rememberMe = Cookies.get("rememberMe");
  loginForm.value = {
    username: username === undefined ? loginForm.value.username : username,
    password: password === undefined ? loginForm.value.password : decrypt(password),
    rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
  };
}

getCode();
getCookie();
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #0d0d0d 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(201, 168, 76, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, rgba(201, 168, 76, 0.06) 0%, transparent 40%);
    pointer-events: none;
  }
}

.login-brand {
  margin-bottom: 24px;
  text-align: center;
  .login-brand-logo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #c9a84c;
    box-shadow: 0 0 20px rgba(201, 168, 76, 0.4);
    object-fit: cover;
  }
}

.title {
  margin: 0 auto 4px auto;
  text-align: center;
  color: #c9a84c;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
}

.subtitle {
  text-align: center;
  color: rgba(201, 168, 76, 0.5);
  font-size: 11px;
  letter-spacing: 3px;
  margin: 0 0 24px 0;
}

.login-form {
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.04);
  width: 400px;
  padding: 30px 30px 10px 30px;
  border: 1px solid rgba(201, 168, 76, 0.3);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(201, 168, 76, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;

  :deep(.el-input__wrapper) {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(201, 168, 76, 0.25);
    box-shadow: none;
    &:hover { border-color: rgba(201, 168, 76, 0.5); }
    &.is-focus { border-color: #c9a84c; box-shadow: 0 0 0 1px rgba(201,168,76,0.3); }
  }
  :deep(.el-input__inner) { color: #f0e6c8; }
  :deep(.el-input__prefix-inner svg) { color: rgba(201,168,76,0.7); }

  :deep(.el-button--primary) {
    background: linear-gradient(135deg, #c9a84c, #a8863a);
    border-color: #c9a84c;
    color: #1a1a1a;
    font-weight: 700;
    letter-spacing: 2px;
    &:hover { background: linear-gradient(135deg, #d4af6a, #c9a84c); }
  }

  :deep(.el-checkbox__label) { color: rgba(201,168,76,0.7); }
  :deep(.el-checkbox__inner) {
    background: transparent;
    border-color: rgba(201,168,76,0.4);
  }
  :deep(.el-checkbox.is-checked .el-checkbox__inner) {
    background: #c9a84c;
    border-color: #c9a84c;
  }

  .el-input { height: 40px; input { height: 40px; } }
  .input-icon { height: 39px; width: 14px; margin-left: 0; }
}

.login-code {
  width: 33%;
  height: 40px;
  float: right;
  img { cursor: pointer; vertical-align: middle; }
}

.login-code-img { height: 40px; padding-left: 12px; }

.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: rgba(201, 168, 76, 0.4);
  font-size: 12px;
  letter-spacing: 1px;
}
</style>
