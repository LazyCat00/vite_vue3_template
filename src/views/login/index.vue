<template>
  <!-- 登录容器 -->
  <div class="login-container">
    <!-- 登录卡片 -->
    <el-card class="login-card">
      <!-- 登录标题 -->
      <h1 class="login-title">登录</h1>
      <!-- 登录表单 -->
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginFormRef"
        label-width="80px"
      >
        <!-- 用户名输入框 -->
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <!-- 密码输入框 -->
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
        <!-- 登录错误提示 -->
        <el-form-item v-if="loginError" class="login-error">
          <el-alert title="{{ loginError }}" type="error" show-icon></el-alert>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElCard,
  ElAlert,
} from 'element-plus'

// 定义登录表单相关数据
const loginForm = ref({
  username: '',
  password: '',
})

// 定义登录表单验证规则
const loginRules = ref({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

// 定义登录错误信息
const loginError = ref<string | null>(null)

// 定义登录方法
const login = () => {}
</script>

<style scoped lang="scss">
/* 登录容器样式 */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/images/login_background.jpg');
  /* 替换成你的背景图片路径 */
  background-size: cover;
  background-position: center;
}

/* 登录卡片样式 */
.login-card {
  width: 400px;
  padding: 20px;
}

/* 登录标题样式 */
.login-title {
  font-size: 24px;
  margin-bottom: 20px;
}

/* 登录错误提示样式 */
.login-error {
  text-align: center;
}
</style>
