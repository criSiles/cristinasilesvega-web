<template>
  <!-- Socks image -->
  <div class="flex flex-row flex-wrap">
    <div class="w-[100%] md:w-[50%]">
      <img class="w-[70%] m-10 p-4 mist-border-2" v-bind:src="image" />
    </div>

    <!-- Product description -->
    <div class="w-[100%] md:w-[50%] ml-3 md:ml-0 mist-border-2 m-10 p-4 mist-border-2">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p>Shipping: {{ shipping }}</p>
      <ul>
        <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
      </ul>

      <div
        v-for="(variant, index) in variants"
        class="w-12 h-12 mt-2 mist-border-2 rounded-[50%]"
        :class="
          {
            green: 'bg-[green]',
            blue: 'bg-[blue]'
          }[variant.color]
        "
        :key="variant.id"
        @click="updateVariant(index)"
      ></div>

      <PrettyButton :isActive="inStock" @click="addToCart"> Add to Cart </PrettyButton>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import socksBlueImage from '../assets/shop/socks_blue.jpg'
import socksGreenImage from '../assets/shop/socks_green.jpg'
import PrettyButton from './PrettyButton.vue'

const props = defineProps({
  premium: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['add-to-cart'])

const product = ref('Socks')
const brand = ref('Vue Mastery')
const selectedVariant = ref(0)
const details = ref(['50% cotton', '30% wool', '20% polyester'])

const variants = ref([
  { id: 2234, color: 'green', image: socksGreenImage, quantity: 50 },
  { id: 2235, color: 'blue', image: socksBlueImage, quantity: 0 }
])

const title = computed(() => {
  return brand.value + ' ' + product.value
})

const image = computed(() => {
  return variants.value[selectedVariant.value].image
})

const inStock = computed(() => {
  return variants.value[selectedVariant.value].quantity > 0
})

const shipping = computed(() => {
  if (props.premium) {
    return 'Free'
  }
  return 2.99
})

function addToCart() {
  emit('add-to-cart', variants.value[selectedVariant.value].id)
}

function updateVariant(index) {
  selectedVariant.value = index
}
</script>

<style>
h1 {
  font-size: 50px;
}

h3 {
  font-size: 25px;
}

p {
  font-size: 22px;
}

ul {
  list-style-type: none;
}

li {
  font-size: 18px;
}
</style>
