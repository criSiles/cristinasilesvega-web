<template>
  <ShopHeader />
  <div class="white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div v-if="loading">
        <p>Loading...</p>
      </div>
      <div
        v-else
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a
          v-for="product in products"
          :key="product.id"
          :href="product.href"
          class="group no-underline"
        >
          <RouterLink
            class="no-underline"
            :to="{ name: 'ProductDetails', params: { id: product.id } }"
          >
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
            >
              <img
                :src="getImagePath(product.colors[0].imageSrc)"
                :alt="product.colors[0].imageAlt"
                class="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-2 text-sm font-medium text-gray-700">{{ product.name }}</h3>
            <p class="-mt-2 text-sm font-semibold text-gray-700">{{ product.price }}</p>
          </RouterLink>
          <!-- TO DO: When I click the color change the photo -->
          <div class="flex justify-center items-center -mt-2">
            <div
            v-for="(variant, index) in product.colors"
            class="w-3 h-3 mt-2 mr-2 rounded-full cursor-pointer"
            :style="{ backgroundColor: variant.color.toLowerCase() }"
            :key="index"
            ></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useEshopStore } from '../../stores/EshopStore'
import { storeToRefs } from 'pinia'
import ShopHeader from '@/components/eshop/ShopHeader.vue'

const eshopStore = useEshopStore()
const { products, loading } = storeToRefs(eshopStore)
eshopStore.fetchProducts()

const getImagePath = (imageSrc) => `../../src/assets/eshop/${imageSrc}`
</script>
