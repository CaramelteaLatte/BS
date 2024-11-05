<template>
  <div class="register-container">
    <!-- 背景覆盖层 -->
    <div class="background-overlay"></div>

    <el-form :model="registerForm" :rules="rules" ref="registerForm" class="register-form">
      <h1>用户注册</h1>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="registerForm.password"
          type="password"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registerForm.email" placeholder="请输入邮箱" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleRegister">创建用户</el-button>
        <el-button @click="goToLogin" class="login-btn">返回登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      registerForm: {
        username: '',
        password: '',
        email: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, message: '用户名至少6个字符', trigger: 'blur' },
          { validator: this.checkUniqueUsername, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码至少6个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' },
          { validator: this.checkUniqueEmail, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleRegister () {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          console.log('注册成功:', this.registerForm)
          // 在此处处理注册逻辑，比如调用API注册用户
          this.$message.success('注册成功')
          this.$router.push('/login') // 跳转到注册页面
        } else {
          console.log('注册失败')
          return false
        }
      })
    },
    goToLogin () {
      this.$router.push('/login') // 返回登录页面
    },
    checkUniqueUsername (rule, value, callback) {
      // 模拟的唯一性验证逻辑
      const existingUsernames = ['existingUser1', 'existingUser2'] // 假设已有的用户名
      if (existingUsernames.includes(value)) {
        callback(new Error('用户名已存在'))
      } else {
        callback()
      }
    },
    checkUniqueEmail (rule, value, callback) {
      // 模拟的唯一性验证逻辑
      const existingEmails = ['test@example.com', 'user@example.com'] // 假设已有的邮箱
      if (existingEmails.includes(value)) {
        callback(new Error('邮箱已被注册'))
      } else {
        callback()
      }
    }
  }
}
</script>

<style scoped>
.register-container {
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

.register-form {
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

.login-btn {
  margin-left: 10px;
  background-color: #4a90e2;
  border-color: #4a90e2;
  color: white;
}

.login-btn:hover {
  background-color: #357abd;
  border-color: #357abd;
}
</style>
