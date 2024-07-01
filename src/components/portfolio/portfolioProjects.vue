<template>
  <section id="projects">
    <h1 class="title">Projects</h1>
    <p class="subtitle">Look at my work</p>
    <div class="projects-container">
      <!-- TODO: Make a v-for to display the entire details-container div -->
      <div class="details-container">
        <div class="img-container">
          <img src="/src/assets/portfolio/todo.avif" alt="Project 1" class="project-img" />
        </div>
        <h2 class="project-title">To Do App</h2>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onclick="location.href='https://github.com/criSiles/cristinasilesvega-web'"
          >
            Github
          </button>
          <router-link :to="{ name: 'ToDo' }">
            <button class="btn btn-color-2">Live Demo</button>
          </router-link>
        </div>
      </div>
      <div class="details-container">
        <div class="img-container">
          <img src="/src/assets/portfolio/eshop.avif" alt="Project 2" class="project-img" />
        </div>
        <h2 class="project-title">eCommerce</h2>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onclick="location.href='https://github.com/criSiles/cristinasilesvega-web'"
          >
            Github
          </button>
          <router-link :to="{ name: 'Shop' }">
            <button class="btn btn-color-2">Live Demo</button>
          </router-link>
        </div>
      </div>
      <!-- TODO: Why in mobile the third project is larger and the buttons get different -->
      <div class="details-container">
        <div class="img-container">
          <img src="/src/assets/portfolio/delaporte.avif" alt="Project 3" class="project-img" />
        </div>
        <h2 class="project-title">Band Web</h2>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onclick="location.href='https://github.com/criSiles/delaporte'"
          >
            Github
          </button>
          <button class="btn btn-color-2" onclick="location.href='https://delaporte-cccb5.web.app/'">
            Live Demo
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  color: black;
}

#projects {
  margin-bottom: 6rem;
  margin-inline: 3rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
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

.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.details-container {
  flex: 1 1 400px;
  max-width: 400px;
  min-width: 310px;
  padding: 1.5rem;
  background: white;
  border-radius: 2rem;
  border: rgb(130, 130, 130) 0.1rem solid;
  text-align: center;
}

.img-container {
  display: flex;
  text-align: initial;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: space-around;
}

.project-img {
  border-radius: 2rem;
  width: 90%;
  height: 90%;
  border: rgb(145, 145, 145) 0.05rem solid;
}

.project-title {
  margin: 1rem;
  color: black;
  font-weight: 600;
  font-size: 1.75rem;
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

.btn-color-2 {
  border: black 0.1rem solid;
  background: white;
}

.btn-color-2:hover {
  cursor: pointer;
  background: black;
  border: black 0.1rem solid;
  color: white;
}
</style>
