<template>
  <div class="page">
    <div class="page-header">
      <portfolioHeader :title="title" />
    </div>
    <div class="page-content">
      <portfolioProfile
        :profileImg="profileImg"
        :profileName="profileName"
        :role="role"
        :curriculum="curriculum"
        :linkedinProfile="linkedinProfile"
        :githubProfile="githubProfile"
      />
      <portfolioSkills />
      <portfolioProjects />
      <portfolioAbout
        :professionalText="professionalText"
        :personalText="personalText"
        :hobbieImg1="hobbieImg1"
        :hobbieImg2="hobbieImg2"
        :hobbieImg3="hobbieImg3"
      >
      </portfolioAbout>
      <portfolioContact :mail="mail" />
    </div>
    <div class="page-footer">
      <portfolioFooter :profileName="profileName"/>
    </div>
  </div>
</template>

<script setup>
import portfolioHeader from '@/components/portfolio/portfolioHeader.vue'
import portfolioProfile from '@/components/portfolio/portfolioProfile.vue'
import portfolioSkills from '@/components/portfolio/portfolioSkills.vue'
import portfolioProjects from '@/components/portfolio/portfolioProjects.vue'
import portfolioAbout from '@/components/portfolio/portfolioAbout.vue'
import portfolioContact from '@/components/portfolio/portfolioContact.vue'
import portfolioFooter from '@/components/portfolio/portfolioFooter.vue'

import { ref } from 'vue'
import profileImgPath from '/portfolio/circleCris.png'
import curriculumPath from '/portfolio/CristinaSilesFrontend_EN.pdf'
// Header props
const title = ref("Cristina's Home")

// Profile props
const profileImg = ref(profileImgPath)
const profileName = ref('Cristina Siles')
const role = ref('Frontend Developer')
const curriculum = ref(curriculumPath)
const linkedinProfile = ref('https://www.linkedin.com/in/cristina-siles-vega/')
const githubProfile = ref('https://github.com/criSiles')

// About props
// TODO: Format this text
const professionalText = ref(`<p>
  In 2019, I graduated in Chemistry from Malaga University, and in 2020, I relocated to
  Barcelona to pursue employment opportunities.
  </p>
  <br />
  <p>
    After spending three years in the fragrance industry, where I gained insights into
    perfumery and developed strong skills in teamwork, project management, and organization,
    I discovered programming. This led me to embark on a Web Development Bootcamp through a
    Women in Tech scholarship.
    </p>
    <br />
    <p>
      Soon enough, I realized that I wanted a change in my life and couldn't resist the
      enchantments of frontend development. Following a year of intensive study, I decided to
      launch this website to showcase everything I've learned. I am open to delving into other
      frontend frameworks or even backend development in the future.
      </p>
      <br />
      
      <p>
        However, the learning journey never ends, and this platform will continually evolve
        every time I learn something new.
        </p>
        <br />
        <p>Stay tuned for updates!</p>`)
const personalText = ref(`<p>
          I enjoy maintaining an active lifestyle. Although I'm not an expert in any particular
          activity, I like going to the gym, as well as participating in sports such as indoor
          climbing and paddle tennis (padel). I love nature, so in fall and spring, I hike. In
          winter, I relish snowboarding, and in summer, I am drawn to surfing.
          </p>
          <br />
          <p>
            I find joy in exploring a diverse array of pursuits. I love live music and often attend
            concerts and festivals. I also enjoy going out to eat and meeting with friends and
            family. <br />
            Furthermore, when I stay at home, I like to play board games, watch TV shows, and read.
            </p>
            <br />
            <p>These images capture just a few moments of my many passions:</p>`)
import hobbieImg1 from '/portfolio/cris_mountain.jpg'
import hobbieImg2 from '/portfolio/cris_surf.jpg'
import hobbieImg3 from '/portfolio/cris_fest.jpg'

// Contact props
const mail = ref('cristina.siles.vega@gmail.com')
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
   /* animation: slideInFromLeft 1.5s ease-in-out; */
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

/* .page-header {
  margin-bottom: 20px;
}

.page-content {
  margin-bottom: 20px;
}

.page-footer {
  margin-top: 20px;
} */
</style>
