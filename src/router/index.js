import { createRouter, createWebHistory } from 'vue-router'

// ToDo
import ToDoNotesView from '../views/ToDo/ToDoNotesView.vue'
import ToDoView from '../views/ToDo/ToDoView.vue'
// eShop
import ShopView from '../views/eshop/ShopView.vue'
import ProductDetailView from '../views/eshop/ProductDetailView.vue'
import ProductCategoryView from '../views/eshop/ProductCategoryView.vue'
// Portfolio
import PortfolioView from '../views/portfolio/PortfolioView.vue'
// import portfolioHeader from '@/components/portfolio/portfolioHeader.vue'
// import portfolioSkills from '@/components/portfolio/portfolioSkills.vue'
// import portfolioProjects from '@/components/portfolio/portfolioProjects.vue'
// import portfolioAbout from '@/components/portfolio/portfolioAbout.vue'
// import portfolioContact from '@/components/portfolio/portfolioContact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // ToDo
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
    // eShop
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
    // Portfolio
    {
      path: '/',
      name: 'Portfolio',
      component: PortfolioView
    },
    // Portfolio sections
    // { path: '/home', name: 'Home', component: portfolioHeader },
    // { path: '/skills', name: 'Skills', component: portfolioSkills },
    // { path: '/projects', name: 'Projects', component: portfolioProjects },
    // { path: '/contact', name: 'Contact', component: portfolioContact },
    // { path: '/about', name: 'About', component: portfolioAbout },
  ], 
  // hash: true,
})

export default router
