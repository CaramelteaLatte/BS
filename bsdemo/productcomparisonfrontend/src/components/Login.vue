<template>
  <div class="login-container">
    <!-- 背景覆盖层 -->
    <div class="background-overlay"></div>
    
    <el-form :model="loginForm" class="login-form">
      <h1>Welcome</h1>
      <el-form-item>
        <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="el-icon-user" />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="loginForm.password"
          :type="passwordVisible ? 'text' : 'password'"
          placeholder="密码"
          prefix-icon="el-icon-lock"
        >
          <template #suffix>
            <el-button
              @click="togglePasswordVisibility"
              type="text"
              icon="el-icon-view"
              :icon="passwordVisible ? 'el-icon-view-off' : 'el-icon-view'"
            ></el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="options">
        <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin" class="login-btn">登录</el-button>
        <el-button @click="handleRegister" class="register-btn">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        rememberMe: false
      },
      passwordVisible: false
    }
  },
  methods: {
    handleLogin () {
      console.log('登录信息:', this.loginForm)
    },
    handleRegister () {
      console.log('注册')
      this.$router.push('/register') // 跳转到注册页面
    },
    togglePasswordVisibility () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style scoped>
.login-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  background-image: url('../assets/1.jpg'); /* 确保背景图路径正确 */
  background-size: cover;
  background-position: center;
}

/* 背景覆盖层 */
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5); /* 半透明白色覆盖层，可调整透明度 */
  z-index: 1;
}

.login-form {
  position: relative;
  z-index: 2; /* 确保表单在覆盖层之上显示 */
  width: 350px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
}

.el-form-item {
  margin-bottom: 20px;
}

.options {
  display: flex;
  justify-content: flex-start;
  color: #777;
  font-size: 0.9em;
}

.login-btn {
  width: 100px;
  background-color: #4a90e2;
  border-color: #4a90e2;
  color: white;
}

.login-btn:hover {
  background-color: #357abd;
  border-color: #357abd;
}

.register-btn {
  width: 100px;
  background-color: #50e3c2;
  border-color: #50e3c2;
  color: white;
}

.register-btn:hover {
  background-color: #3cb79e;
  border-color: #3cb79e;
}
</style>
