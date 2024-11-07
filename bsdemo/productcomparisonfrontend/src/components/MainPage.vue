<template>
  <div class="search-container">
    <!-- 搜索条件的水平布局 -->
    <div class="search-bar">
      <!-- 商品名称输入框 -->
      <input type="text" v-model="productName" placeholder="请输入商品名称">
      <!-- 价格范围输入框 -->
      <input type="number" v-model="minPrice" placeholder="最低价">
      <span> - </span>
      <input type="number" v-model="maxPrice" placeholder="最高价">
      <!-- 勾选框：选择平台 -->
      <label>
        <input type="checkbox" v-model="platforms.taobao"> 淘宝
      </label>
      <label>
        <input type="checkbox" v-model="platforms.jd"> 京东
      </label>
      <label>
        <input type="checkbox" v-model="platforms.suning"> 苏宁
      </label>
      <!-- 搜索按钮 -->
      <button @click="searchProducts" class="search-button">搜索</button>
    </div>

    <!-- 搜索结果展示 -->
    <div class="search-results">
      <div v-for="(result, index) in searchResults" :key="index" class="result-item">
        <img :src="result.image" alt="商品图片" class="product-image">
        <div class="product-info">
          <p class="product-name">{{ result.name }}</p>
          <p class="product-price">¥{{ result.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productName: '', // 输入的商品名称
      minPrice: null, // 最低价格
      maxPrice: null, // 最高价格
      platforms: { // 勾选的平台
        taobao: false,
        jd: false,
        suning: false
      },
      searchResults: [] // 搜索结果
    }
  },
  methods: {
    async searchProducts () {
      // 模拟搜索请求，获取平台的价格数据
      let results = []

      // 假设我们从不同的平台获取不同商品的模拟数据
      if (this.platforms.taobao) {
        results.push({ name: '淘宝商品1', price: 120, image: 'https://via.placeholder.com/100x100?text=Taobao1' })
        results.push({ name: '淘宝商品2', price: 130, image: 'https://via.placeholder.com/100x100?text=Taobao2' })
      }
      if (this.platforms.jd) {
        results.push({ name: '京东商品1', price: 140, image: 'https://via.placeholder.com/100x100?text=JD1' })
        results.push({ name: '京东商品2', price: 150, image: 'https://via.placeholder.com/100x100?text=JD2' })
      }
      if (this.platforms.suning) {
        results.push({ name: '苏宁商品1', price: 110, image: 'https://via.placeholder.com/100x100?text=Suning1' })
        results.push({ name: '苏宁商品2', price: 160, image: 'https://via.placeholder.com/100x100?text=Suning2' })
      }

      // 根据价格范围过滤结果
      if (this.minPrice !== null) {
        results = results.filter(item => item.price >= this.minPrice)
      }
      if (this.maxPrice !== null) {
        results = results.filter(item => item.price <= this.maxPrice)
      }

      // 将过滤后的结果显示出来
      this.searchResults = results
    }
  }
}
</script>

<style scoped>
.search-container {
  padding: 20px;
  background-image: url('../assets/1.jpg'); /* 替换为您的背景图路径 */
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
  background-color: rgba(255, 255, 255, 0.5); /* 半透明白色覆盖层，可调整透明度 */
  z-index: 1;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

input[type="text"], input[type="number"] {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

input[type="number"] {
  width: 80px;
}

label {
  font-size: 14px;
}

.search-button {
  padding: 8px 16px;
  background-color: #007BFF;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #0056b3;
}

.search-results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.result-item {
  width: 150px;
  text-align: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
}

.product-info {
  margin-top: 10px;
}

.product-name {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.product-price {
  font-size: 14px;
  color: #007BFF;
}
</style>
