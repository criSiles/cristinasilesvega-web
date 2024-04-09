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
          v-for="product in categorizedProductsArray"
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
            <div class="flex justify-between mt-3 mx-1">
              <h3 class="text-sm font-medium text-gray-600 uppercase">{{ product.name }}</h3>
              <p class="text-sm font-semibold text-gray-600">{{ product.price }}</p>
            </div>
          </RouterLink>
          <!-- TODO: When I click the color change the photo -->
          <div class="flex justify-between -mt-2">
            <div class="text-sm mt-2 text-gray-600 ml-1">COLORS</div>
            <div class="flex flex-row">
              <div
              v-for="(variant, index) in product.colors"
              class="w-3 h-3 mt-3 mr-1 rounded-full cursor-pointer border border-gray-300 active:border-gray-400"
              :style="{ backgroundColor: variant.color.toLowerCase() }"
              :key="index"
              ></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <ShopFooter />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useEshopStore } from '../../stores/EshopStore'

import ShopHeader from '@/components/eshop/ShopHeader.vue'
import ShopFooter from '@/components/eshop/ShopFooter.vue'

const route = useRoute()
const category = route.params.category

const eshopStore = useEshopStore()
const { products, loading } = storeToRefs(eshopStore)
eshopStore.fetchProducts()

const categorizedProductsArray = computed(() => { 
  return products.value.filter((product) => product.category === category) })

const getImagePath = (imageSrc) => `/eshop/${imageSrc}`
</script>
