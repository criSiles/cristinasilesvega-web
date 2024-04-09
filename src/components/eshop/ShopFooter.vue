<template>
  <footer>
    <div class="flex flex-col justify-between sm:flex-row text-sm mx-6 mt-10 mb-2">
      <p class="font-semibold text-gray-800 mb-4 sm:mb-0">© Express Yourself</p>
      <div class="flex justify-center space-x-4 text-gray-600 mb-4 sm:mb-0 sm:text-sm text-xs">
        <span class="sm:-ml-14"> Terms of use </span>
        <span> Privacy Policy </span>
        <span> Refunds </span>
      </div>
      <ul
        class="m-0 p-0 text-gray-800 list-none flex flex-row justify-center space-x-2 sm:justify-start"
      >
        <li>
          <i class="fab fa-facebook-f"></i>
        </li>
        <li>
          <i class="fab fa-instagram"></i>
        </li>
        <li>
          <i class="fab fa-x-twitter"></i>
        </li>
        <li>
          <i class="fab fa-tiktok"></i>
        </li>
      </ul>
    </div>
    <router-link :to="{ name: 'Portfolio' }">
      <p class="bg-black text-xs p-1 text-white">Return to cristinasilesvega's homepage!</p>
    </router-link>
  </footer>
</template>
