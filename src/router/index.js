import { createRouter, createWebHistory } from 'vue-router'

import ToDoNotesView from '../views/ToDo/ToDoNotesView.vue'
import ToDoView from '../views/ToDo/ToDoView.vue'
import ShopView from '../views/eshop/ShopView.vue'
import ProductDetailView from '../views/eshop/ProductDetailView.vue'
import ProductCategoryView from '../views/eshop/ProductCategoryView.vue' 
import PortfolioView from '../views/portfolio/PortfolioView.vue'

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: PortfolioView
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: ToDoView
  },
  {
    path: '/todo/notes/:id',
    name: 'ToDoNotesView',
    component: ToDoNotesView,
    props: true
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ShopView
  },
  {
    path: '/shop/product/:id',
    name: 'ProductDetails',
    component: ProductDetailView
  },
  {
    path: '/shop/:category',
    name: 'ProductCategory',
    component: ProductCategoryView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
