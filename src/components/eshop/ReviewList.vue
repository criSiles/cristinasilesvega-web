<template>
  <div class="flex justify-center">
    <span class="text-3xl text-gray-950">
      {{ averageReview() }}
    </span>
    <span class="text-3xl text-gray-950" v-for="(star, index) in stars" :key="index">
      {{ star ? '★' : '☆' }}
    </span>
  </div>
    <span class="text-lg text-gray-950 upper">
      Based on {{ product.reviews.length }} reviews
    </span>
  <div class="mt-10 relative">
    <div>
      <button @click="togglePopUp" class="border border-gray-200 bg-white text-gray-600 w-52 h-12 mb-12 p-2">
        <i class="fa-regular fa-pen-to-square"></i> Leave a review
      </button>
      <Transition
        enter-from-class="opacity-0"
        enter-active-class="transition-opacity ease-in-out duration-250"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-active-class="transition-opacity ease-in-out duration-250"
        leave-to-class="opacity-0"
      >
    </Transition>
    <ReviewForm class=" -mt-26 -mb-44" :id="product.id" @close="togglePopUp" v-show="popUp"></ReviewForm>

    </div>
  </div>

  <div class="flex justify-center min-h-screen white">
    <fieldset class="inline-block mx-8 p-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <label
          v-for="(review, index) in product.reviews"
          :key="index"
          class="text-left group relative flex flex-col justify-start width-auto border py-3 px-4 text-sm font-medium focus:outline-none sm:flex-1 sm:py-6 cursor-pointer shadow-sm"
        >
          <span class="flex flex-start font-semibold text-gray-950">
            {{ review.name }}
          </span>
          <span class="flex text-base font-semibold text-gray-950">
            <span v-for="(star, index) in stars" :key="index">
              {{ star ? '★' : '☆' }}
            </span>
          </span>
          <span class="flex font-normal text-gray-600">
            {{ review.review }}
          </span>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { defineComponent, Transition } from 'vue'
import ReviewForm from './ReviewForm.vue'

export default defineComponent({
  name: 'ReviewList',
  components: { ReviewForm, Transition },
  props: {
    product: {
      type: Object,
      default: () => ({ reviews: [] }),
      required: true
    }
  },
  data() {
    return {
      popUp: false
    }
  },
  computed: {
    stars() {
      const rating = Math.round(this.averageReview())
      return Array(5)
        .fill(false)
        .map((_, i) => i < rating)
    }
  },
  methods: {
    averageReview() {
      let total = 0
      for (let i = 0; i < this.product.reviews.length; i++) {
        total += this.product.reviews[i].rating
      }
      return (total / this.product.reviews.length).toFixed(1)
    },
    togglePopUp() {
      this.popUp = !this.popUp
    }
  }
})
</script>
