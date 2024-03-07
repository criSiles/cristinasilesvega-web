<template>
  <header class="w-full min-h-0 white">
    <div class="bg-black text-xs text-white p-1">Elevate your workout wardrobe today!</div>
    <nav class="flex flex-col lg:flex-row text-center justify-between items-center px-4 m-8 ml-4">
      <RouterLink :to="{ name: 'Shop' }">
        <h1 class="font-bold text-3xl tracking-widest text-gray-800 no-underline uppercase">
          express yourself
        </h1>
      </RouterLink>
      <div class="hidden lg:flex justify-around w-auto mr-14">
        <a
          href="/#"
          class="text-gray-600 no-underline uppercase mx-2 tracking-wider hover-border-2 pb-0"
        >
          clothes</a
        >
        <a
          href="/#"
          class="text-gray-600 no-underline uppercase mx-2 tracking-wider hover-border-2 pb-0"
        >
          accessories</a
        >
        <a
          href="/#"
          class="text-gray-600 no-underline uppercase mx-2 tracking-wider hover-border-2 pb-0"
        >
          equipment</a
        >
      </div>
      <div class="lg:flex justify-around w-auto lg:mt-0 mt-2 lg:mb-0 -mb-10 ml-3">
        <a href="/#" class="text-gray-600 mr-3 uppercase no-underline hover-border-2 pb-0">
          search</a
        >
        <a href="/#" class="text-gray-600 mr-3 uppercase no-underline hover-border-2 pb-0">
          profile</a
        >
        <RouterLink
          :to="{ name: 'Cart' }"
          class="text-gray-600 uppercase no-underline hover-border-2 pb-0"
        >
          cart({{ totalItemCount }})</RouterLink
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useEshopStore } from '../../stores/EshopStore'
const eshopStore = useEshopStore()
const cart = eshopStore.cart

const totalItemCount = computed(() => {
  return cart.reduce((acc, product) => acc + product.quantity, 0)
})
</script>
