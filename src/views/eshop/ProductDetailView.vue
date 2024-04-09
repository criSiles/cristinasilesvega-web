<template>
  <ShopHeader />
  <ProductDetails
    :product="product"
  />
  <ReviewList v-if="product" :product="product" />
  <ShopFooter/>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useEshopStore } from '@/stores/EshopStore'

import ProductDetails from '@/components/eshop/ProductDetails.vue'
import ShopHeader from '@/components/eshop/ShopHeader.vue'
import ReviewList from '@/components/eshop/ReviewList.vue'
import ShopFooter from '@/components/eshop/ShopFooter.vue'


const eshopStore = useEshopStore()

const route = useRoute()
let id = parseInt(route.params.id)

eshopStore.fetchProducts()

let product = computed(() => {
  if (eshopStore.loading === false) {
    return eshopStore.getProductById(id)
  } else {
    return null
  }
})
</script>
