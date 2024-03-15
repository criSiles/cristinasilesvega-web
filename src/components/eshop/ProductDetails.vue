<template>
  <section class="flex white mb-8">
      <div class="flex flex-row flex-wrap md:flex-nowrap">
        <div class="w-[100%] md:w-[40%]" v-if="product">
          <img
            class="w-[70%] md:w-[55%] mx-auto my-8"
            :src="getImagePath(product.colors[selectedVariant].imageSrc)"
            alt="product image"
          />
        </div>

        <div class="w-[70%] md:w-[50%] mx-auto">
          <div class="flex justify-between -mt-22 md:mt-10">
            <h1 class="text-xl uppercase font-medium text-gray-950">{{ product.name }}</h1>
            <h1 class="text-xl font-light">{{ product.price }}</h1>
          </div>
          <div class="flex justify-start ">
            <div class="text-sm mt-2  text-gray-600 mr-2">COLORS</div>
            <div class="flex flex-row">
              <div
                v-for="(variant, index) in product.colors"
                class="w-3 h-3 mt-2.5 mr-1 rounded-full cursor-pointer border border-gray-300 active:border-gray-400"
                :style="{ backgroundColor: variant.color.toLowerCase() }"
                :key="variant.color"
                @click="updateVariant(index)"
              ></div>
            </div>
          </div>
          <SizesComponent
            @size-selected="updateSize"
            :availableSizes="sizesAsArray"
          ></SizesComponent>
          <PrettyButton :isActive="inStock" @click="addToCart" class="mx-auto"> TO BUY </PrettyButton>
          <div class="flex uppercase  text-gray-950">
            Description: 
          </div>
          <div class="font-light text-left">
            {{ product.description }}
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
})

const getImagePath = (imageSrc) => `/eshop/${imageSrc}`

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
