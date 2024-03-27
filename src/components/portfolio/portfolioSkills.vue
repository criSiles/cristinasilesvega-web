<template>
  <section id="skills">
    <h1 class="title">Skills</h1>
    <p class="subtitle">Check what I know</p>
    <div class="logos-grid">
      <figure class="skill-container" v-for="skill in skills" :key="skill.name">
        <!-- I'm binding a style attribute, that is a computed property, a function that computes the color of the shadow and returns a string with the drop-shadow value  -->
        <img
          class="logo-img-svg"
          :src="skill.logo"
          :style="{ filter: dropShadow(skill.color) }"
          alt="Logo of {{skill.name}}"
        />
        <figcaption class="skill-name">
          <h3>{{ skill.name }}</h3>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
import pythonLogo from '@/assets/logos/python-logo.svg'
import htmlLogo from '@/assets/logos/html-5-logo.svg'
import cssLogo from '@/assets/logos/css-3-logo.svg'
import javascriptLogo from '@/assets/logos/javascript-logo.svg'
import typescriptLogo from '@/assets/logos/typescript-logo.svg'
import vueLogo from '@/assets/logos/vue-logo.svg'
import piniaLogo from '@/assets/logos/pinia-logo.svg'
import tailwindLogo from '@/assets/logos/tailwind-logo.svg'
import gitLogo from '@/assets/logos/git-logo.svg'
import githubLogo from '@/assets/logos/github-logo.svg'
import firebaseLogo from '@/assets/logos/firebase-logo.svg'
import mongodbLogo from '@/assets/logos/mongodb-logo.svg'
import nodejsLogo from '@/assets/logos/nodejs-logo.svg'
import jestLogo from '@/assets/logos/jest-logo.svg'

export default {
  data() {
    return {
      skills: [
        { name: 'Python', logo: pythonLogo, color: 'rgba(56,118,167, 0.3)' },
        { name: 'HTML', logo: htmlLogo, color: 'rgba(228,76,36, 0.3)' },
        { name: 'CSS', logo: cssLogo, color: 'rgba(36,76,228, 0.3)' },
        { name: 'Javascript', logo: javascriptLogo, color: 'rgba(240,219,79, 0.3)' },
        { name: 'Typescript', logo: typescriptLogo, color: 'rgba(56,118,167, 0.3)' },
        { name: 'Vue 3', logo: vueLogo, color: 'rgba(62,177,136, 0.3)' },
        { name: 'Pinia', logo: piniaLogo, color: 'rgba(62,177,136, 0.3)' },
        { name: 'Tailwind', logo: tailwindLogo, color: 'rgba(54,192,196, 0.3)' },
        { name: 'Git', logo: gitLogo, color: 'rgba(244,100,84, 0.3)' },
        { name: 'GitHub', logo: githubLogo, color: 'rgba(0, 0, 0, 0.3)' },
        { name: 'Firebase', logo: firebaseLogo, color: 'rgba(251,203,60, 0.3)' },
        { name: 'MongoDB', logo: mongodbLogo, color: 'rgba(71,166,77, 0.3)' },
        { name: 'Node.js', logo: nodejsLogo, color: 'rgba(136,201,76, 0.3)' },
        { name: 'Jest', logo: jestLogo, color: 'rgba(156,68,92, 0.3)' }
      ]
    }
  },

  computed: {
    dropShadow() {
      return (color) => `drop-shadow(0 5px 2px ${color})`
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

#skills {
  position: relative;
}
.title {
  font-size: 3rem;
  text-align: center;
}

.subtitle {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
}
.section-container {
  display: flex;
}
.coding-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.coding-container > img {
  position: relative;
  width: 2rem;
  margin-right: 0.3rem;
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  margin: 0rem 4rem;
}

.skill-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 1rem auto;
  transition: transform 0.3s ease-in-out;
}

.skill-container:hover {
  transform: scale(1.2);
}

.logo-img-svg {
  position: relative;
  width: 5rem;
  margin: 0.5rem 0.5rem;
}

.skill-name > h3 {
  font-family: 'Source Code Pro', monospace;
  margin-top: 0.2rem;
  color: #0e2431;
  font-size: 1rem;
  font-weight: 600;
}

@media screen and (max-width: 780px) {
  .skills {
    padding-bottom: 4rem;
    margin-bottom: 2rem;
  }

  .coding-container {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .coding-container > p {
    margin-left: -1.8rem;
    margin-right: -1.8rem;
    font-size: 0.9rem;
  }

  .logos-grid {
    grid-template-columns: repeat(2, 1fr);
    margin: 0rem 0rem;
  }
}
</style>
