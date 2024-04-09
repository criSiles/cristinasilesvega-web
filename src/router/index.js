import { createRouter, createWebHashHistory } from 'vue-router'

// ToDo
import ToDoNotesView from '../views/ToDo/ToDoNotesView.vue'
import ToDoView from '../views/ToDo/ToDoView.vue'
// eShop
import ShopView from '../views/eshop/ShopView.vue'
import ProductDetailView from '../views/eshop/ProductDetailView.vue'
import ProductCategoryView from '../views/eshop/ProductCategoryView.vue'
// Portfolio
import PortfolioView from '../views/portfolio/PortfolioView.vue'

const routes = [
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
    },
    {
      path: '/',
      name: 'Portfolio',
      component: PortfolioView
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  } 
})

export default router
