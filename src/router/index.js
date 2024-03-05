import { createRouter, createWebHistory } from 'vue-router'

import ToDoNotesView from '../views/ToDo/ToDoNotesView.vue'
import ToDoView from '../views/ToDo/ToDoView.vue'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import ProjectsWipView from '../views/ProjectsWipView.vue'
import ProjectsDisplayView from '../views/ProjectsDisplayView.vue'
import ShopView from '../views/eshop/ShopView.vue'
import ProductDetailView from '../views/eshop/ProductDetailView.vue'
import CartView from '../views/eshop/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/aboutme',
    name: 'AboutMe',
    component: AboutMeView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/workinprogress',
    name: 'ProjectsWip',
    component: ProjectsWipView
  },
  {
    path: '/projects',
    name: 'ProjectsDisplay',
    component: ProjectsDisplayView
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: ToDoView
  },
  {
    path: '/notes/:id',
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
    path: '/shop/cart',
    name: 'Cart',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
