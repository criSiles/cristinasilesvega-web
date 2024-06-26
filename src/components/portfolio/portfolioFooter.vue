<template>
  <footer id="portfolioFooter">
    <div></div>
    <p id="made-with">
      Made with
      <svg
        viewBox="0 0 1792 1792"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style="height: 0.8rem"
      >
        <path
          d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
          fill="#e25555"
        ></path>
      </svg>
      by {{ name }}
    </p>
    <nav>
      <router-link :to="{ path: '/', hash: '#home' }">
        <img src="/src/assets/portfolio/arrow.png" alt="Arrow icon" class="arrow"
      /></router-link>
    </nav>
  </footer>
</template>

<script setup>
const props = defineProps({ profileName: String })

let name = props.profileName
</script>

<style scoped>
#portfolioFooter {
  gap: 0.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
#made-with {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
}
.arrow {
  cursor: pointer;
  height: 2rem;
  position: fixed; 
  right: 20px; 
  bottom: 32px; }

@media screen and (max-width: 768px) {
  #portfolioFooter {
    flex-direction: column-reverse;
    align-items: center;
  }
  #made-with {
    margin-top: 1rem;
  }
}
</style>
