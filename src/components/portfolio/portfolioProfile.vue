<template>
  <section id="profile">
    <div class="profile-img">
      <img src="/src/assets/circleCris.png" alt="Cristina Siles profile picture" />
    </div>
    <div class="hi-container">
      <p class="hi">Hi all, it's me</p>
      <h1 class="name"><span class="gradient" @click="addConfetti">Cristina Siles</span></h1>
      <p class="role">Frontend Developer</p>
      <div class="btn-container">
        <button
          class="btn btn-color-1"
          onclick="window.open('/src/assets/portfolio/CSV_CV_2024.pdf')"
        >
          Download CV
        </button>
        <button class="btn btn-color-2" onclick="location.href='./#contact'">Contact Info</button>
      </div>
      <div id="socials-container">
        <img
          src="/src/assets/portfolio/linkedin.png"
          alt="My LinkedIn profile"
          class="icon"
          onclick="location.href='https://www.linkedin.com/in/cristina-siles-vega/'"
        />
        <img
          src="/src/assets/portfolio/github.png"
          alt="My Github profile"
          class="icon"
          onclick="location.href='https://github.com/criSiles'"
        />
      </div>
    </div>
  </section>
</template>
<script>
import JSConfetti from 'js-confetti'
export default {
  methods: {
    addConfetti() {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  color: black;
}

html {
  scroll-behavior: smooth;
}

section {
  padding-top: 4vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
}

#profile {
  display: flex;
  justify-content: center;
  gap: 5rem;
  height: 80vh;
  animation: slideInFromLeft 2s ease-in-out;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.profile-img {
  display: flex;
  height: 400px;
  width: 400px;
  margin: auto 0;
}

.hi-container {
  align-self: center;
  text-align: center;
}

.hi-container p {
  font-weight: 600;
}

.hi {
  text-align: center;
  font-size: 1.5rem;
}

.name {
  font-size: 3rem;
  text-align: center;
}
.role {
  font-size: 1.9rem;
  margin-bottom: 1rem;
}

.gradient {
  background: linear-gradient(270deg, #ff6347, #eee8aa, #40e0d0);
  background-size: 600% 600%;
  -webkit-text-fill-color: #0000;
  -webkit-background-clip: text;
  animation: gradient-flow 6s ease infinite;
  background-clip: none;
}

@keyframes gradient-flow {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
#socials-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}

/* ICONS */

.icon {
  cursor: pointer;
  height: 2rem;
}

.icon:hover {
  transform: scale(1.1);
}

/* BUTTONS */

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
}

.btn-color-1,
.btn-color-2 {
  border: black 0.1rem solid;
}

.btn-color-1:hover,
.btn-color-2:hover {
  cursor: pointer;
}

.btn-color-1,
.btn-color-2:hover {
  background: black;
  color: white;
}

.btn-color-1:hover {
  background: white;
  color: black;
}

.btn-color-2 {
  background: white;
}

.btn-color-2:hover {
  border: rgb(255, 255, 255) 0.1rem solid;
}

.btn-container {
  gap: 1rem;
}

@media screen and (max-width: 1400px) {
  #profile {
    height: 83vh;
    margin-bottom: 6rem;
  }
  #contact,
  #projects {
    height: fit-content;
  }
}

@media screen and (max-width: 1200px) {
  #profile {
    display: block;
  }
  section {
    height: fit-content;
    margin: 0 5%;
  }

  .profile-img {
    width: 275px;
    height: 275px;
    margin: 0 auto 2rem;
  }
}

@media screen and (max-width: 600px) {
  #profile {
    height: 83vh;
    margin-bottom: 0;
  }
  .profile-img {
    width: auto;
    height: 46vw;
    justify-content: center;
  }
  .hi{
    font-size: 1.15rem;
  }
  .name {
    font-size: 2rem;
  }
  .role {
    font-size: 1.25rem;
  }
}
</style>
