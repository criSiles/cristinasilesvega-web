<template>
  <section id="about">
    <h1 class="title">About Me</h1>
    <p class="subtitle">Get to know me</p>
    <div class="section-container">
      <div class="about-details-container">
        <div class="about-containers">
          <article class="details-container">
            <div class="about-title">
              <img src="/src/assets/portfolio/experience.png" alt="Experience icon" class="icon" />
              <h3>Professional life</h3>
            </div>
            <div class="about-text">
              <p>
                In 2019, I graduated in Chemistry from Malaga University, and in 2020, I relocated
                to Barcelona to pursue employment opportunities.
              </p>
              <br />
              <p>
                After spending three years in the fragrance industry, where I gained insights into
                perfumery and developed strong skills in teamwork, project management, and
                organization, I discovered programming. This led me to embark on a Web Development
                Bootcamp through a Women in Tech scholarship.
              </p>
              <br />
              <p>
                Soon enough, I realized that I wanted a change in my life and couldn't resist the
                enchantments of frontend development. Following a year of intensive study, I decided
                to launch this website to showcase everything I've learned. I am open to delving
                into other frontend frameworks or even backend development in the future.
              </p>
              <br />

              <p>
                However, the learning journey never ends, and this platform will continually evolve
                every time I learn something new.
              </p>
              <br />
              <p>Stay tuned for updates!</p>
            </div>
          </article>
          <article class="details-container">
            <div class="about-title">
              <img src="/src/assets/portfolio/education.png" alt="Education icon" class="icon" />
              <h3>Personal life</h3>
            </div>
            <div class="about-text">
              <p>
                I enjoy maintaining an active lifestyle. Although I'm not an expert in any
                particular activity, I like going to the gym, as well as participating in sports
                such as indoor climbing and paddle tennis (padel). I love nature, so in fall and
                spring, I hike. In winter, I relish snowboarding, and in summer, I am drawn to
                surfing.
              </p>
              <br />
              <p>
                I find joy in exploring a diverse array of pursuits. I love live music and often
                attend concerts and festivals. I also enjoy going out to eat and meeting with
                friends and family. <br />
                Furthermore, when I stay at home, I like to play board games, watch TV shows, and
                read. 
              </p><br />
              <p>These images capture just a few moments of my many passions:</p>
            </div>
            <div class="img-container">
              <img
                class="hobbie-img"
                src="/src/assets/portfolio/cris_mountain.jpg"
                alt="article img"
              />
              <img class="hobbie-img" src="/src/assets/portfolio/cris_surf.jpg" alt="article img" />
              <img class="hobbie-img" src="/src/assets/portfolio/cris_fest.jpg" alt="article img" />
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

section {
  padding-top: 4vh;
  height: 96vh;
  margin: 0rem 10rem;
  margin-top: 20rem;
  box-sizing: border-box;
  min-height: fit-content;
}

#about {
  position: relative;
}

.title {
  font-size: 3rem;
  text-align: center;
}

.subtitle {
  text-align: center;
}

.icon {
  cursor: pointer;
  height: 2rem;
}

.about-containers {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.about-details-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.details-container {
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;
}

.about-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 1.25rem;
}

.about-text {
  text-align: start;
  margin-top: 1rem;
  font-size: 1rem;
}

.section-container {
  gap: 4rem;
  height: 80%;
}

.img-container {
  display: flex;
  margin: auto 0;
  width: 100%;
  height: 100%;
  gap: 1.6rem;
  justify-content: center;
  margin-top: 1rem;
}

.hobbie-img {
  max-width: 30%;
  max-height: 30%;
  object-fit: cover;
  border-radius: 1rem;
}

/* TO DO: Delete media query and try to make it responsive with flex */

/* @media screen and (max-width: 1200px) {
  section,
  .section-container {
    height: fit-content;
  }
  section {
    margin: 0 5%;
  }
  .section__pic-container {
    width: 275px;
    height: 275px;
    margin: 0 auto 2rem;
  }
  .about-containers {
    margin-top: 0;
  }
}

@media screen and (max-width: 600px) {
  .about-containers {
    flex-wrap: wrap;
  }
  .img-container {
    width: auto;
    height: 46vw;
    justify-content: center;
  }
  .subtitle {
    font-size: 1.25rem;
  }
  .title {
    font-size: 2rem;
  }
  .text-container {
    text-align: justify;
  }
} */
</style>
