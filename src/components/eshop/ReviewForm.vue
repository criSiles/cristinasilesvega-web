<template>
  <section class="w-full flex items-center justify-center min-h-screen white">
    <form
      @submit.prevent="onSubmit"
      class="flex flex-col items-center justify-center md:w-[51%] w-[75%] space-y-12 "
    >
        <div class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
          <div class="col-span-full">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900 ">Name:</label>
            <div class="mt-2">
              <input class="block w-full border border-black py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="name" v-model="newReview.name" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="review" class="block text-sm font-medium leading-6 text-gray-900">Review:</label>
            <div class="mt-2">
              <textarea id="review" v-model="newReview.review" rows="3" class="block w-full border border-black py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your experience.</p>
          </div>

          <div class="col-span-full">
            <label for="rating" class="block text-sm font-medium leading-6 text-gray-900">Rating:</label>
            <div class="mt-2">
              <select class="block w-full border border-black py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="rating" v-model.number="newReview.rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </div>
          </div>


          <div class="col-span-full flex justify-center">
            <PrettyButton type="submit" value="Submit" :isActive="true">Submit</PrettyButton>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { reactive } from 'vue'
import { useEshopStore } from '@/stores/EshopStore'
import PrettyButton from './PrettyButton.vue'

export default {
  components: { PrettyButton },
  props: ['id'],
  setup(props) {
    const newReview = reactive({
      name: '',
      review: '',
      rating: null,
    })
    const onSubmit = () => {
      console.log('This is the id', props.id);
      if (
        newReview.name === '' ||
        newReview.review === '' ||
        newReview.rating === null 
      ) {
        alert('Review is incomplete. Please fill out every field.')
        return
      }
      console.log('submit')
      console.log('This is the name', newReview.name)
      console.log('This is the review', newReview.review)
      console.log('This is the rating', newReview.rating)

      useEshopStore().addReview(
        {
          name: newReview.name,
          review: newReview.review,
          rating: newReview.rating,
        },
        props.id
      )

      newReview.name = ''
      newReview.review = ''
      newReview.rating = null
      
      const product = useEshopStore().getProductById(props.id)
      console.log('Reviews', product.reviews)
    }
    return {
      newReview,
      onSubmit
    }
  }
}
</script>
