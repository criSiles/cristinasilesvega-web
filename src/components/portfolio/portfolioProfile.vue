<template>
  <section id="profile">
    <div class="profile-img">
      <img :src="profileImg" alt="{{ profileName }} profile picture" />
    </div>
    <div class="greeting-container">
      <p class="greeting">Hi all, it's me</p>
      <h1 class="name">
        <span class="gradient" @click="addConfetti">{{ profileName }}</span>
      </h1>
      <p class="role">{{ role }}</p>
      <div class="btn-container">
        <button
          class="btn btn-color-1"
          onclick="window.open('/portfolio/CSV_CV_2024.pdf')"
        >
          Download CV
        </button>
        <router-link :to="{ path: '/', hash: '#contact' }">
          <button class="btn btn-color-2">Contact Info</button>
        </router-link>
      </div>
      <div id="socials-container">
        <img
          src="/src/assets/portfolio/linkedin.png"
          alt="My LinkedIn profile"
          class="icon"
          @click="navigateToLinkedIn"
        />
        <img
          src="/src/assets/portfolio/github.png"
          alt="My Github profile"
          class="icon"
          @click="navigateToGithub"
        />
      </div>
    </div>
  </section>
</template>
<script>
import JSConfetti from 'js-confetti'
export default {
  props: {
    profileImg: String,
    profileName: String,
    role: String,
    curriculum: String,
    linkedinProfile: String,
    githubProfile: String
  },
  methods: {
    addConfetti() {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
    },
    navigateToLinkedIn() {
      window.location.href = this.linkedinProfile
    },
    navigateToGithub() {
      window.location.href = this.githubProfile
    },
    navigateToCurriculum() {
      window.open(this.curriculum)
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
#profile {
  margin-bottom: 6rem;
  height: fit-content;
  min-height: 80vh;
  gap: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

.profile-img {
  display: flex;
  height: auto;
  width: 35%;
  max-width: 450px;
  min-width: 250px;
  margin: auto 0;
}

.greeting-container {
  align-self: center;
  text-align: center;
}

.greeting-container p {
  font-weight: 500;
}

.greeting {
  text-align: center;
  font-size: 1.9rem;
}

.name {
  font-size: 3rem;
  text-align: center;
  cursor: pointer;
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
  padding-top: 1rem;
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

.btn-color-2,
.btn-color-1:hover {
  background: white;
  color: black;
}

@media screen and (max-width: 768px) {
  #profile {
    flex-direction: column;
  }
  /* TODO: Delete this mess*/
  .greeting-container {
    margin-top: -3rem;
  }
}

/* TODO: Look at everything proportionally */
@media screen and (max-width: 380px) {
  .name {
    font-size: 2.4rem;
  }
  .role {
    font-size: 1.5rem;
  }
  .greeting {
    font-size: 1.5rem;
  }
}
</style>
