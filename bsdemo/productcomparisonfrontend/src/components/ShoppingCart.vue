<template>
  <div class="home-page">
    <!-- 背景覆盖层 -->
    <div class="background-overlay"></div>
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header class="top-navbar">
        <div class="navbar-content">
          <!-- 左侧标题 -->
          <div class="navbar-title">商品比价平台</div>
          <!-- 右侧菜单 -->
          <el-menu mode="horizontal" :default-active="activeIndex" class="navbar-menu">
            <el-menu-item index="1" @click="gotohome">Home</el-menu-item>
            <el-menu-item index="2" @click="gotoshoppingcart">ShoppingCart</el-menu-item>
            <el-menu-item index="3" @click="gotosettings">Settings</el-menu-item>
            <el-menu-item index="4" @click="gotologin">Sign out</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <!-- 主内容 -->
      <el-main>
        <div class="search-section">
          <!-- 搜索栏 -->
          <el-input
            placeholder="搜索商品..."
            v-model="searchQuery"
            prefix-icon="el-icon-search"
            @keyup.enter="handleSearch"
            class="search-bar"
          ></el-input>
          <!-- 多选框 -->
          <el-checkbox-group v-model="selectedPlatforms" class="platform-checkbox-group">
            <el-checkbox v-for="platform in platforms" :label="platform" :key="platform">{{ platform }}</el-checkbox>
          </el-checkbox-group>
          <!-- 搜索按钮 -->
          <el-button type="primary" @click="handleSearch" class="search-button">搜索</el-button>
        </div>
        <!-- 商品展示区域 -->
        <el-row class="product-container">
          <el-col :span= "4" v-for="item in items" :key="item.id">
            <el-card :body-style="{ padding: '10px' }" class="product-card">
              <img :src="item.image" class="product-image" />
              <div style="padding: 14px;" class="product-detail">
                <span>{{ item.name }}</span>
                <span>{{ item.price }}</span>
                <div class ="bottom clearfix">
                  <time class="time">{{ currentDateTime }}</time>
                </div>
                <el-button type="text" @click.native="gotoproducts" class ="product-delta">距加入价格波动{{ item.delta }}元</el-button>
                <div class ="choose">
                  <el-button type="primary" size="mini" @click="goToPlatform(item.link)" style="width: 50%; margin-top: 10px;" class="buy-button">
                    跳转链接
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      activeIndex: '1',
      selectedPlatforms: ['淘宝'], // 默认选择的平台
      platforms: ['淘宝', '京东', '苏宁'], // 平台选项
      items: [
        {
          id: 1,
          name: '商品A',
          image: 'https://via.placeholder.com/150',
          price: '￥99.00',
          link: 'https://example.com/productA',
          delta: 10
        },
        {
          id: 4,
          name: '商品D',
          image: 'https://via.placeholder.com/150',
          price: '￥199.00',
          link: 'https://example.com/productB',
          delta: 5
        }],
      currentDateTime: new Date().toLocaleString()
    }
  },
  methods: {
    handleSearch () {
      console.log('搜索内容:', this.searchQuery)
      console.log('选择的平台:', this.selectedPlatforms)
    },
    gotohome () {
      this.$router.push('/home')
    },
    gotoshoppingcart () {
      this.$router.push('/shoppingcart')
    },
    gotosettings () {
      this.$router.push('/settings')
    },
    gotologin () {
      this.$router.push('/login')
    },
    gotoproducts () {
      this.$router.push('/products')
    },
    showdeltatable () {
      this.$alert('这是一段内容', '标题名称', {confirmButtonText: '确定'})
    },
    goToPlatform (link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped>
.home-page {
  position: relative;
  height: 100vh;
  background-image: url('../assets/2.jpg.png'); /* 替换为您的背景图路径 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 背景覆盖层 */
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0); /* 半透明白色覆盖层，可调整透明度 */
  z-index: 1;
}

.top-navbar {
  background-color: rgba(255, 255, 255, 1); /* 半透明背景 */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  z-index: 2;
  padding: 0 0px;
}

.navbar-content {
  display: flex;
  align-items: flex-start;
}

.navbar-title {
  width: 100%;
  margin: 10px;
  font-size: 32px;
  font-weight: bold;
  color: #333;
}

.navbar-menu {
  display: flex;
  background-color: rgba(255, 255, 255, 0);
  z-index: 3;
  justify-content: flex-start;
  font-weight: bold;
  width: 100%;
  color: #007bff; /* 蓝色字体 */
}

.navbar-menu .el-menu-item {
  color: #007bff; /* 设置菜单项字体颜色为蓝色 */
}

.navbar-menu .el-menu-item:hover {
  color: #0056b3; /* 鼠标悬停时字体颜色加深 */
}

.search-section {
  display: flex;
  align-items: center;
  margin: 20px auto;
  gap: 60px; /* 缩小间距 */
  justify-content: center;
  z-index: 4;
}

.search-bar {
  width: 300px;
  background-color: rgba(255, 255, 255, 1);
}

.platform-checkbox-group {
  display: flex;
  align-items: center;
  color: #111; /* 设置多选框字体为黑色 */
}

.platform-checkbox-group .el-checkbox {
  color: #111; /* 多选框字体颜色 */
  font-weight: bold;
}

.search-button {
  margin-left: 5px;
  color: #ffffff; /* 设置搜索按钮的字体为黑色 */
  background-color: #ff7f7f;
  border-color: #ff7f7f;
  font-weight: bold;
  font-size: 15px;
}

.product-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.product-card {
  height: 375px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 1);
}

.product-delta{
  font-size: 13px;
  color: #007bff;
}

.product-image {
  width: 100%;
  height: 60%;
  object-fit: cover;
}

.time {
  font-size: 13px;
  color: #999;
}

.buy-button{
    background-color: #ff7f7f;
    border-color: #ff7f7f;
    color: #ffffff;
}

.buy-button .el-button:hover{
    color: #000;
}
</style>
