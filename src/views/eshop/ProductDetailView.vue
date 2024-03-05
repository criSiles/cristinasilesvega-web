<template>
  <ShopHeader />
  <ProductDisplay
    :product="product"
    :premium="premium"
  />
  <ReviewList v-if="product" :product="product" />
  <ReviewForm :id="product.id" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useEshopStore } from '@/stores/EshopStore'

import ProductDisplay from '@/components/eshop/ProductDisplay.vue'
import ShopHeader from '@/components/eshop/ShopHeader.vue'
import ReviewList from '@/components/eshop/ReviewList.vue'
import ReviewForm from '@/components/eshop/ReviewForm.vue'

const eshopStore = useEshopStore()

const premium = ref(true)

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
