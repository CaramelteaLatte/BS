import Vue from 'vue'
import Router from 'vue-router'
import LoginVue from '@/components/Login.vue'
import RegisterVue from '@/components/Register.vue'
import HomeVue from '@/components/Home.vue'
import EngineVue from '@/components/Engine.vue'
import ProductsVue from '@/components/Products.vue'
import ShoppingCartVue from '@/components/ShoppingCart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: LoginVue
    },
    {
      path: '/register',
      component: RegisterVue
    },
    {
      path: '/home',
      component: HomeVue
    },
    {
      path: '/engine',
      component: EngineVue
    },
    {
      path: '/engine/products',
      component: ProductsVue
    },
    {
      path: '/shoppingcart',
      component: ShoppingCartVue
    }
  ]
})
