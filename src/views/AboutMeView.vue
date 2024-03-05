<template>
  <GeneralHeader />
  <section class="all-container" role="contentinfo">
    <main class="grid">
      <article class="aboutme">
        <h1 class="title">About me</h1>
        <p class="aboutme-text">
          Hi! I'm Cristina, a chemist from Málaga who moved to Barcelona in 2020.
        </p>
        <p class="aboutme-text">
          After 3 years in the fragrance industry, where I learnt a bit about perfumes and a lot
          about teamwork, project management, strong organization skills and other professional
          aptitudes, I discovered programming and I embarked on a Web Development Bootcamp through a
          Women in Tech scholarship.
        </p>
        <p class="aboutme-text">
          I knew soon enough that I wanted a change in my life and couldn't resist the Frontend
          enchantments. Following a year of intensive study, I decided to start this website to show
          everything I've learned.
        </p>
        <p class="aboutme-text">
          However, the learning journey never ends, and this platform will continually evolve
          everytime I learn something new.
        </p>
        <p class="aboutme-text">Stay tuned for updates!</p>
      </article>

      <article class="hobbies">
        <h2 class="subtitle">Hobbies</h2>
        <p class="hobbies-text">
          I like having an active lifestyle. Although, I'm not an expert in any particular activity,
          I find joy in exploring a diverse array of pursuits. These are some pictures of my many
          passions. Furthermore, I also like to snowboarding, play padel, indoor cycling, to play
          board games, to see tv shows and to read.
        </p>
        <article>
          <img class="hobbie-img" src="../assets/about/cris_surf.jpg" alt="article img" />
          <h3 class="hobbie-title">Surfing</h3>
        </article>
        <article>
          <img class="hobbie-img" src="../assets/about/cris_fest.jpg" alt="article img" />
          <h3 class="hobbie-title">Live Music</h3>
        </article>
        <article>
          <img class="hobbie-img" src="../assets/about/cris_climber.jpg" alt="article img" />
          <h3 class="hobbie-title">Indoor Climbing</h3>
        </article>
        <article>
          <img class="hobbie-img" src="../assets/about/cris_mountain.jpg" alt="article img" />
          <h3 class="hobbie-title">Hiking</h3>
        </article>
      </article>

      <article class="cv">
        <a href="/CSV_CV_2024.pdf" download>Download my CV!</a>
      </article>
    </main>
  </section>
  <GeneralFooter />
</template>

<script>
import GeneralHeader from '@/components/GeneralHeader.vue'
import GeneralFooter from '@/components/GeneralFooter.vue'
export default {
  name: 'AboutMeView',
  components: {
    GeneralHeader,
    GeneralFooter
  }
}
</script>

<style scoped>
.all-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  margin: 0;
  background: linear-gradient(to bottom, #f2f2f2, white);
  color: #0e2431;
}

.grid {
  display: grid;
  gap: 60px;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
}

.aboutme {
  grid-column: 1 / span 4;
  border-bottom: 1px solid #bbc7c7;
  padding-bottom: 40px;
}

.title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.aboutme-text {
  text-align: justify;
  font-size: 1.1rem;
  margin: 16px 0;
}

.hobbies {
  display: grid;
  grid-column: 1 / span 4;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 60px;
  align-items: center;
  border-bottom: 1px solid #bbc7c7;
}
.subtitle {
  grid-column: 1 / span 4;
  margin: -3rem;
  font-size: 2rem;
}
.hobbies-text {
  grid-column: 1 / span 5;
  text-align: justify;
  margin-top: -1rem;
  margin-bottom: -1rem;
  font-size: 1.1rem;
  line-height: 1.6;
}
.hobbie-img {
  grid-column: span 1;
  width: 100%;
  margin-left: 2rem;
  margin-bottom: 2rem;
}
.hobbie-title {
  margin-left: 4rem;
  margin-top: -1.5rem;
  margin-bottom: 3rem;
  font-size: 1rem;
  font-weight: 500;
}

.cv {
  grid-column: 1 / span 4;
  padding-bottom: 40px;
}

.cv a {
  font-family: 'Poppins';
  color: #0e2431;
  margin-top: 1.2rem;
  width: 100%;
  font-size: 1em;
  text-decoration: none;
  font-weight: 500;
}

@media screen and (max-width: 980px) {
  .aboutme,
  .hobbies {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    font-size: 16px;
  }
  .subtitle,
  .hobbies-text,
  .aboutme-text {
    width: 100%;
    text-align: justify;
  }
  .hobbies {
    padding-bottom: 2.5rem;
  }
  .subtitle {
    width: 100%;
    text-align: center;
    margin-bottom: 0rem;
  }
  .hobbie-img {
    width: 100%;
    max-width: 300px;
    margin: 10px 0;
  }
  .hobbie-title {
    margin: 10px 0;
    font-size: 18px;
  }
  .cv {
margin-top: -2rem;
  }
}
</style>
