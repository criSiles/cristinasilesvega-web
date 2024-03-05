<template>
  <fieldset class="mt-4 border-0">
    <legend class="sr-only">Choose a size</legend>
    <div class="grid grid-cols-4 gap-4">
      <label
        v-for="(size, index) in sizes"
        :key="index"
        :class="[
          isAvailable(size)
            ? 'cursor-pointer bg-white text-gray-900 shadow-sm border'
            : 'cursor-not-allowed bg-gray-50 text-gray-200',
          size === selectedSize ? 'bg-gray-850 text-white' : '',
          'h-1 group relative flex items-center justify-center py-3 px-4 text-sm font-medium uppercase hover:bg-gray-200 focus:outline-none sm:flex-1 sm:py-6'
        ]"
      >
        <span :id="'size-choice-' + index + '-label'">
          {{ size }}
        </span>
        <svg
          v-if="!isAvailable(size)"
          class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          stroke="currentColor"
        >
          <!--  Draw a line from the bottom left corner to the top right corner of a 100x100 SVG viewport, and the line's stroke width will remain constant even if the line or its parent elements are scaled-->
          <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
        </svg>
        <input
          type="radio"
          name="size-choice"
          :value="size"
          class="sr-only"
          :aria-labelledby="'size-choice-' + index + '-label'"
          :disabled="!isAvailable(size)"
          v-model="selectedSize"
          @click="updateSize(size)"
        />
        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
      </label>
    </div>
  </fieldset>

  <div class="mt-10 relative">
    <div class="flex items-center justify-between">
      <!-- TO DO: Apply translate y -->
      <Transition
        enter-from-class="opacity-0"
        enter-active-class="transition-opacity ease-in-out duration-250"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-active-class="transition-opacity ease-in-out duration-250"
        leave-to-class="opacity-0"
      >
        <SizeGuide @close="togglePopUp" v-show="popUp"></SizeGuide>
      </Transition>

      <a
        @click="togglePopUp"
        class="cursor-pointer text-sm font-medium px-4 text-gray-800 hover:text-gray-500 group"
        >Size guide
        <span class="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">&rarr;</span>
      </a>
    </div>
  </div>
</template>

<script>
import { Transition } from 'vue'
import SizeGuide from './SizeGuide.vue'

export default {
  props: {
    availableSizes: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      selectedSize: null,
      sizes: ['unique', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      popUp: false
    }
  },
  methods: {
    isAvailable(size) {
      return this.availableSizes.includes(size)
    },
    updateSize(size) {
      console.log('Size selected:', size)
      return this.$emit('size-selected', size)
    },
    togglePopUp() {
      this.popUp = !this.popUp
    }
  },
  components: { SizeGuide, Transition }
}
</script>
