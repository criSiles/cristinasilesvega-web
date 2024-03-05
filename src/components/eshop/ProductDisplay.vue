<template>
  <section class="flex white">
    <div class="p-4">
      <div class="flex flex-row flex-wrap md:flex-nowrap">
        <div class="w-[100%] md:w-[40%]" v-if="product">
          <img
            class="w-[70%] md:w-[55%] m-10 p-4"
            :src="getImagePath(product.colors[selectedVariant].imageSrc)"
            alt="product image"
          />
        </div>

        <div class="w-[100%] md:w-[50%]">
          <div class="flex justify-between -mt-16 md:mt-10">
            <h1 class="text-xl uppercase font-medium">{{ product.name }}</h1>
            <h1 class="text-xl font-light">{{ product.price }}</h1>
          </div>
          <!-- <p class="text-lg" v-if="inStock">In Stock</p>
          <p class="text-lg" v-else>Out of Stock</p> -->
          <!-- <p class="text-lg">Shipping: {{ shipping }}</p> -->
          <div class="flex flex-row items-start space-x-2">
            <div
              v-for="(variant, index) in product.colors"
              class="w-3 h-3 rounded-full cursor-pointer"
              :style="{ backgroundColor: variant.color.toLowerCase() }"
              :key="variant.color"
              @click="updateVariant(index)"
            ></div>
          </div>
          <SizesComponent
            @size-selected="updateSize"
            :availableSizes="sizesAsArray"
            class="mt-10"
          ></SizesComponent>
          <PrettyButton :isActive="inStock" @click="addToCart"> Add to Cart </PrettyButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useEshopStore } from '@/stores/EshopStore'
import PrettyButton from '../eshop/PrettyButton.vue'
import SizesComponent from './SizesComponent.vue'

const props = defineProps({
  product: {
    type: Object,
    default: () => ({ colors: [] }),
    required: true
  },
  premium: {
    type: Boolean,
    required: true
  }
})

const getImagePath = (imageSrc) => `../../src/assets/eshop/${imageSrc}`

const selectedVariant = ref(0)

function updateVariant(index) {
  selectedVariant.value = index
}

const inStock = computed(() => {
  const variant = props.product.colors[selectedVariant.value]
  // if variant exists and has sizes as a property, some() returns true if it finds an element that satisfies the condition, size quantity greater than 0
  return variant && variant.sizes && variant.sizes.some((size) => size.quantity > 0)
})

const sizesAsArray = computed(() => {
  // ? means, if the left side is null or undefined stop and return undefined, else return the right side (sizes)
  const sizes = props.product.colors[selectedVariant.value]?.sizes
  return (
    sizes
      // map through the sizes and return the size if the quantity is greater than 0, else return null
      .map((s) => (s.quantity > 0 ? s.size : null))
      // delete the null values, empty strings and undefined values, return only the sizes that are in stock
      .filter((size) => size !== null && size !== undefined && size !== '')
  )
})

// TO DO: Implement premium shipping if they're logged in
// const shipping = computed(() => {
//   if (props.premium) {
//     return 'Free'
//   }
//   return 2.99
// })

const selectedSize = ref('')

const updateSize = (size) => {
  selectedSize.value = size
}

const addToCart = () => {
  if (!selectedSize.value) {
    alert('Please select a size')
    return
  }
  const variant = props.product.colors[selectedVariant.value]
  const productCart = {
    id: props.product.id,
    color: variant.color,
    size: selectedSize.value,
    quantity: 1,
    price: props.product.price,
    name: props.product.name,
    imageSrc: variant.imageSrc
  }
  useEshopStore().updateCart(productCart)
}
</script>
