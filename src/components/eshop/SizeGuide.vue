<template>
  <div
    class="fixed top-0 left-0 z-10 w-full h-full bg-gray-200 bg-opacity-50 flex items-center justify-center text-gray-950"
  >
    <div
      class="bg-white text-gray-950 relative p-4 rounded-lg shadow-md inline-block sm:w-full sm:p-4 md:w-2/5"
      style="width: auto"
    >
      <div
        class="absolute h-8 w-8 flex justify-center items-center top-0 right-0 text-xl mr-2 text-gray-400 cursor-pointer"
        @click="close"
      >
        &times;
      </div>
      <h1 class="sm:text-lg text-base font-semibold">Size Guide</h1>
      <h1 class="sm:text-sm text-xs font-light mb-4">(cm)</h1>
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-2 sm:px-4 py-2 sm:text-base text-sm font-semibold">Size</th>
              <th class="px-2 sm:px-8 py-2 sm:text-base text-sm font-semibold">EU</th>
              <th class="px-2 sm:px-8 py-2 sm:text-base text-sm font-semibold">Waist</th>
              <th class="px-2 sm:px-8 py-2 sm:text-base text-sm font-semibold">Hips</th>
              <th class="px-2 sm:px-8 py-2 sm:text-base text-sm font-semibold">Chest</th>
            </tr>
          </thead>
          <tbody>
            <template :key="index" v-for="(size, index) in sizes">
              <tr class="sm:text-base text-sm font-light">
                <td class="px-2 py-2">{{ size }}</td>
                <td class="px-2 py-2">{{ euSizes[index] }}</td>
                <td class="px-2 py-2">{{ waistSizes[index] }}</td>
                <td class="px-2 py-2">{{ hipsSizes[index] }}</td>
                <td class="px-2 py-2">{{ chestSizes[index] }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
const euSizes = ['32', '34-36', '38-40', '42-44', '46-48', '50-52', '54-56']
const waistSizes = [
  '56/58',
  '58/62-62/66',
  '66/70-70/74',
  '74/78-78/82',
  '82/86-86/90',
  '90/98-98/106',
  '106/114-114/122'
]
const hipsSizes = [
  '82/84',
  '84/88-88/92',
  '92/96-96/100',
  '100/104-104/108',
  '108/112-112/116',
  '116/122-122/128',
  '128/134-134/140'
]
const chestSizes = [
  '76/78',
  '78/82-82/86',
  '86/90-90/94',
  '94/98-98/102',
  '102/106-106/110',
  '110/116-116/122',
  '122/128-128/134'
]
const emit = defineEmits(['close'])

const close = () => {
  emit('close')
  console.log('close')
}
</script>
