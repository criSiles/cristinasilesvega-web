<template>
  <div class="flex items-center justify-center min-h-screen white">

    <fieldset class="inline-block m-10 p-5">
      <legend class="not-sr-only">Reviews</legend>
      <div class="grid grid-cols-1 gap-4">
        
        <label v-for="(review, index) in product.reviews" :key="index" class="group relative flex items-center justify-center border py-3 px-4 text-sm font-medium bg-gray-50 hover:bg-gray-200 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer text-gray-900 shadow-sm">
          {{ review.name }} gave this product {{ review.rating }} stars
          <br />
          "{{ review.review }}"
          <br />
            Recommended: {{ review.recommend }}
          </label>
        </div>
      </fieldset>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ReviewList',
  props: {
    product: {
      type: Object,
      default: () => ({ reviews: [] }),
      required: true
    }
  }
})
</script>
