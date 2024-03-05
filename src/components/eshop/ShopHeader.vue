<template>
  <header class="w-full min-h-0 white">
    <div class="bg-black text-xs text-white p-1">Elevate your workout wardrobe today!</div>
    <nav class="flex flex-row text-center justify-between items-center px-4 m-10">
      <RouterLink :to="{ name: 'Shop' }" class="text-gray-700 no-underline uppercase">
        <h1 class="font-extrabold tracking-wider">express yourself</h1>
      </RouterLink>
      <div class="flex justify-around w-auto">
        <a href="/#" class="text-gray-700 no-underline uppercase mx-2"> clothes</a>
        <a href="/#" class="text-gray-700 no-underline uppercase mx-2"> accessories</a>
        <a href="/#" class="text-gray-700 no-underline uppercase mx-2"> equipment</a>
      </div>
      <div>
        <a href="/#" class="text-gray-600 col-span-1 mr-4 uppercase no-underline"> search</a>
        <a href="/#" class="text-gray-600 col-span-1 mr-4 uppercase no-underline"> profile</a>
        <RouterLink
          :to="{ name: 'Cart' }"
          class="text-gray-600 col-span-1 mr-4 uppercase no-underline"
        >
          cart ({{ totalItemCount }})</RouterLink
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
