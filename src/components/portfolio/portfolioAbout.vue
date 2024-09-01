<template>
  <section id="about">
    <h1 class="title">About</h1>
    <p class="subtitle">Get to know me</p>
    <div class="about-container">
      <article class="details-container">
        <div class="about-title">
          <img src="/src/assets/portfolio/experience.avif" alt="Experience icon" class="icon" />
          <h3>Professional life</h3>
        </div>
        <div class="about-text" v-html="professionalText"></div>
      </article>
      <article class="details-container">
        <div class="about-title">
          <img src="/src/assets/portfolio/education.avif" alt="Education icon" class="icon" />
          <h3>Personal life</h3>
        </div>
        <div class="about-text" v-html="personalText"></div>
        <div class="img-container">
          <img class="hobbie-img" :src="hobbieImg1" alt="hobbie1 img" />
          <img class="hobbie-img" :src="hobbieImg2" alt="hobbie2 img" />
          <img class="hobbie-img" :src="hobbieImg3" alt="hobbie3 img" />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    hobbieImg1: String,
    hobbieImg2: String,
    hobbieImg3: String,
    professionalText: String,
    personalText: String
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#about {
  margin-bottom: 6rem;
  margin-inline: 3rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.about-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: fit-content;
  gap: 2rem;
  margin-bottom: 2rem;
}

.details-container {
  flex: 1 1 615px;
  max-width: 615px;
  min-width: 310px;
  padding: 1.5rem;
  background: white;
  border-radius: 2rem;
  border: rgb(130, 130, 130) 0.1rem solid;
  text-align: center;
}

.about-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 1.25rem;
}

.icon {
  cursor: pointer;
  height: 2rem;
}

.about-text {
  text-align: start;
  margin-top: 1rem;
  font-size: 1rem;
}

.img-container {
  display: flex;
  margin: auto 0;
  width: 100%;
  height: 100%;
  gap: 1.6rem;
  justify-content: center;
  margin-top: 1rem;
  height: fit-content;
}

.hobbie-img {
  max-width: 30%;
  max-height: 30%;
  object-fit: cover;
  border-radius: 1rem;
}
</style>
