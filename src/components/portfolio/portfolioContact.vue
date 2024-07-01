<template>
  <section id="contact">
    <h1 class="title">Contact</h1>
    <p class="subtitle">Get in touch</p>
    <ContactForm />
    <div class="contact-info-container">
      <img src="/src/assets/portfolio/email.avif" alt="Email icon" class="email-icon" />
      <p class="mail">
        <a href="mailto:{{ mail }}">{{ mail }}</a>
      </p>
    </div>
  </section>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'

const props = defineProps({
  mail: String
})

let mail = props.mail
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  color: black;
}

#contact {
  margin-bottom: 6rem;
  margin-inline: 3rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.contact-info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  border: rgb(130, 130, 130) 0.1rem solid;
  padding: 0.5rem 1.5rem;
  margin: 2rem;
  width: fit-content;
}

.mail {
  display: flex;
}

.email-icon {
  height: 2.5rem;
  cursor: pointer;
}
</style>
