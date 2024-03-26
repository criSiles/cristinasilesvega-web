<template>
  <section id="projects">
    <h1 class="title">Projects</h1>
    <p class="subtitle">Browse my recent projects</p>
    <div class="projects-container">
      <div class="project-conts">
        <!-- TO DO: Make a v-for to display the entire details-container div -->
        <div class="details-container">
          <div class="img-container">
            <img src="/src/assets/portfolio/todo.jpg" alt="Project 1" class="project-img" />
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
            <img src="/src/assets/portfolio/eshop.jpg" alt="Project 2" class="project-img" />
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
        <div class="details-container">
          <div class="img-container">
            <img src="/src/assets/portfolio/wip.jpg" alt="Project 3" class="project-img" />
          </div>
          <h2 class="project-title">Dashboard</h2>
          <div class="btn-container">
            <button
              class="btn btn-color-2"
              onclick="location.href='https://github.com/criSiles/cristinasilesvega-web'"
            >
              Github
            </button>
            <button class="btn btn-color-2" onclick="location.href='https://github.com/'">
              Live Demo
            </button>
          </div>
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

#projects {
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

.projects-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.project-conts {
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  display: flex;
}

.details-container {
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  text-align: center;
  border-color: rgb(133, 133, 133);
  background: white;
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
  border-color: rgb(133, 133, 133);
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

@media screen and (max-width: 1400px) {
  .project-conts {
    flex-wrap: wrap;
  }
  #projects {
    height: fit-content;
  }
}

@media screen and (max-width: 1200px) {
  .projects-container {
    margin-top: 2rem;
  }
  section{
    height: fit-content;
  }
  section {
    margin: 0 5%;
  }
  .project-conts {
    margin-top: 0;
  }
}
@media screen and (max-width:780px) {
.details-container{
    flex: 0;
}
}

@media screen and (max-width: 600px) {
  .project-conts {
    flex-wrap: wrap;
  }
  .title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1.25rem;
  }
  .details-container{
    flex: 1;
}
}
</style>
