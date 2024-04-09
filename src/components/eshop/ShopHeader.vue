<template>
  <header class="w-full min-h-0 white">
    <div class="bg-black text-xs text-white p-1">Elevate your workout essentials today!</div>
    <nav class="flex flex-col lg:flex-row text-center justify-between items-center px-4 m-8 ml-4">
      <RouterLink :to="{ name: 'Shop' }">
        <h1 class="font-bold text-3xl tracking-widest text-gray-800 no-underline uppercase">
          express yourself
        </h1>
      </RouterLink>
      <div class="hidden lg:flex justify-around w-auto mr-14">
        <RouterLink
          class="no-underline"
          :to="{ name: 'ProductCategory', params: { category: 'clothes'} }">
          <button class="text-gray-600 no-underline uppercase mx-2 tracking-wider hover-border-2 pb-0">clothes</button>
        </RouterLink>
        <RouterLink
          class="no-underline"
          :to="{ name: 'ProductCategory', params: { category: 'accessories' } }">
          <div class="text-gray-600 no-underline uppercase mx-2 tracking-wider hover-border-2 pb-0">accessories</div>
        </RouterLink>
        <RouterLink
          class="no-underline"
          :to="{ name: 'ProductCategory', params: { category: 'equipment' } }">
          <div class="text-gray-600 no-underline uppercase mx-2 tracking-wider hover-border-2 pb-0">equipment</div></RouterLink>
      </div>
      <div class="lg:flex justify-around w-auto lg:mt-0 mt-2 lg:mb-0 -mb-10 ml-3">
        <a class="text-gray-600 mr-3 uppercase no-underline hover-border-2 pb-0"> profile</a>
        <a class="text-gray-600 mr-3 uppercase no-underline hover-border-2 pb-0"> wishlist</a>
        <a
          href="#"
          class="text-gray-600 uppercase no-underline hover-border-2 pb-0"
          @click.prevent="showCartView = !showCartView"
        >
          cart({{ totalItemCount }})
        </a>
        <CartComponent v-if="showCartView" />
      </div>
    </nav>
  </header>
</template>

<script setup>
import CartComponent from './CartComponent.vue'
import { ref, computed } from 'vue'
import { useEshopStore } from '../../stores/EshopStore'
const eshopStore = useEshopStore()
const cart = eshopStore.cart

const showCartView = ref(false)

const totalItemCount = computed(() => {
  return cart.reduce((acc, product) => acc + product.quantity, 0)
})
</script>
