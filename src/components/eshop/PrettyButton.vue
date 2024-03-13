<script setup>
const { isActive } = defineProps({
  // We’re using isActive as a prop to replace inStock here, and we’re emitting the click event when the button is clicked.
  isActive: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <button 
    class="w-52 h-12 m-8 p-2 text-medium leading-none text-center" 
    :class="isActive ? 
      ['bg-gray-950',  'text-white',  'border-gray-950', 'cursor-pointer',  'hover:bg-white', 'hover:border', 'hover:border-gray-950','hover:text-gray-950'] : 
      ['cursor-not-allowed bg-gray-100 text-gray-300 border-gray-100']" 
    :disabled="!isActive"
    @click="emit('click')"
  >
    <slot></slot>
  </button>
</template>