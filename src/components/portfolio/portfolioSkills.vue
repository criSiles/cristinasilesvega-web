<template>
  <section id="skills">
    <h1 class="title">Skills</h1>
    <p class="subtitle">Check what I know</p>
    <div class="skills-container">
      <figure class="single-skill" v-for="skill in skills" :key="skill.name">
        <!-- TODO: I'm binding a style attribute, that is a computed property, a function that computes the color of the shadow and returns a string with the drop-shadow value  -->
        <img
          class="skill-img"
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
import sassLogo from '@/assets/logos/sass-logo.svg'
import viteLogo from '@/assets/logos/vite-logo.svg'
import dockerLogo from '@/assets/logos/docker-logo.svg'
import expressLogo from '@/assets/logos/express-logo.svg'

export default {
  data() {
    return {
      skills: [
        { name: 'Vue 3', logo: vueLogo, color: 'rgba(62,177,136, 0.3)' },
        { name: 'Javascript', logo: javascriptLogo, color: 'rgba(240,219,79, 0.3)' },
        { name: 'HTML', logo: htmlLogo, color: 'rgba(228,76,36, 0.3)' },
        { name: 'CSS', logo: cssLogo, color: 'rgba(36,76,228, 0.3)' },
        { name: 'Tailwind', logo: tailwindLogo, color: 'rgba(54,192,196, 0.3)' },
        { name: 'Sass', logo: sassLogo, color: 'rgba(206, 103, 154, 0.3)' },
        { name: 'Typescript', logo: typescriptLogo, color: 'rgba(56,118,167, 0.3)' },
        { name: 'Pinia', logo: piniaLogo, color: 'rgba(62,177,136, 0.3)' },
        { name: 'Vite', logo: viteLogo, color: 'rgba(119, 83, 254, 0.3)' },
        { name: 'Python', logo: pythonLogo, color: 'rgba(56,118,167, 0.3)' },
        { name: 'Git', logo: gitLogo, color: 'rgba(244,100,84, 0.3)' },
        { name: 'GitHub', logo: githubLogo, color: 'rgba(0, 0, 0, 0.3)' },
        { name: 'Firebase', logo: firebaseLogo, color: 'rgba(251,203,60, 0.3)' },
        { name: 'MongoDB', logo: mongodbLogo, color: 'rgba(71,166,77, 0.3)' },
        { name: 'Node.js', logo: nodejsLogo, color: 'rgba(136,201,76, 0.3)' },
        { name: 'Express.js', logo: expressLogo, color: 'rgba(0, 0, 0, 0.3)' },
        { name: 'Jest', logo: jestLogo, color: 'rgba(156,68,92, 0.3)' },
        { name: 'Docker', logo: dockerLogo, color: 'rgba(6, 109, 165, 0.3)' }
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

#skills {
  height: fit-content;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
}

.title {
  font-size: 3rem;
  text-align: center;
}

.subtitle {
  font-size: 1.2rem;
  text-align: center;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1rem 0rem;
  max-width: 1200px;
}

.single-skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  min-width: 120px;
  width: 130px;
}

.single-skill:hover {
  transform: scale(1.15);
}

.skill-img {
  min-width: 3rem;
  height: 12vh;
  width: auto;
  margin: 1.2rem 0.6rem;
}

.skill-name > h3 {
  font-size: 1rem;
  min-width: 100px;
  font-weight: 500;
}

@media screen and (max-width: 780px) {
  .single-skill {
    max-width: 8rem;
  }
  #skills {
    margin-bottom: 6rem;
  }
}
</style>
