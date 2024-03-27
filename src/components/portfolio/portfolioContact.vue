<template>
  <section id="contact">
    <h1 class="title">Contact</h1>
    <p class="subtitle">Get in touch</p>
    <ContactForm />
    <div class="contact-info-upper-container">
      <div class="contact-info-container">
        <img
        src="/src/assets/portfolio/email.png"
        alt="Email icon"
        class="icon contact-icon email-icon"
        />
        <p><a href="mailto:cristina.siles.vega@gmail.com">cristina.siles.vega@gmail.com</a></p>
      </div>
    </div>
  </section>
</template>
<script setup>
import ContactForm from '@/components/ContactForm.vue'
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

#contact {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  margin-top: 30rem;
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

.icon {
  cursor: pointer;
  height: 2rem;
}
.contact-info-upper-container {
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  background: (250, 250, 250);
  margin: 0rem auto;
  padding: 0.5rem;
}

.contact-info-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
}

.contact-info-container p {
  font-size: larger;
}

.contact-icon {
  cursor: default;
}

.email-icon {
  height: 2.5rem;
}

/* TO DO: Make everything responsive without media queries */

/* @media screen and (max-width: 1400px) {
  #contact{
    height: fit-content;
  }
} */

/* @media screen and (max-width: 1200px) {

  section{
    margin: 0 5%;
  }
}  */

/* @media screen and (max-width: 600px) {

  .contact-info-upper-container{
    flex-wrap: wrap;
  }
  .contact-info-container {
    margin: 0;
  }
  .contact-info-container p {
    font-size: 1rem;
  }
  .experience-sub-title {
    font-size: 1.25rem;
  }
  .title {
    font-size: 2rem;
  }
} */
</style>
