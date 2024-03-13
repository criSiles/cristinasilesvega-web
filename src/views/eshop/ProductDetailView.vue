<template>
  <ShopHeader />
  <ProductDisplay
    :product="product"
  />
  <ReviewList v-if="product" :product="product" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useEshopStore } from '@/stores/EshopStore'

import ProductDisplay from '@/components/eshop/ProductDisplay.vue'
import ShopHeader from '@/components/eshop/ShopHeader.vue'
import ReviewList from '@/components/eshop/ReviewList.vue'


const eshopStore = useEshopStore()

const route = useRoute()
const id = parseInt(route.params.id)

eshopStore.fetchProducts()

const product = computed(() => {
  if (eshopStore.loading === false) {
    return eshopStore.getProductById(id)
  } else {
    return null
  }
})

</script>
