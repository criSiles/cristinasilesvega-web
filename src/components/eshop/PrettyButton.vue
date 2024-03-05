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
    class="w-40 h-12 m-8 p-2 text-medium leading-none text-white text-center" 
    :class="isActive ? 
      ['bg-black',  'border-black', 'cursor-pointer',  'hover:bg-white', 'hover:text-black'] : 
      ['bg-gray-100', 'border-gray-100', 'cursor-not-allowed']" 
    :disabled="!isActive"
    @click="emit('click')"
  >
    <slot></slot>
  </button>
</template>