<template>
  <header id="home" class="header-container">
    <nav id="desktop-nav">
      <router-link :to="{ name: 'Portfolio' }">
        <div class="title">Cristina Siles Vega</div>
      </router-link>
    </nav>
    <nav class="navbar">
      <div class="container nav-container">
        <input class="checkbox" type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div class="menu-items overlay">
          <!-- ORIGINAL -->
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>

          <!-- USING ROUTER, NOT RIGHT -->
          <!-- <li><router-link to="/skills">Skills</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/about">About</router-link></li> -->


          <!-- USING HASH -->
          <!-- <li><a @click="scrollToSection('skills')">Skills</a></li>
          <li><a @click="scrollToSection('projects')">Projects</a></li>
          <li><a @click="scrollToSection('about')">About</a></li>
          <li><a @click="scrollToSection('contact')">Contact</a></li> -->
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    function scrollToSection(sectionId) {
      // Update the hash part of the URL to navigate smoothly
      router.push({ hash: sectionId }).catch((err) => {
        // Handle any errors if necessary
        console.error(err)
      })
    }

    return {
      scrollToSection
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

a:link {
  text-decoration: none;
  /* animation: slideInFromLeft 2s ease-in-out; */
}

.header-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 17vh;
}

/* DESKTOP NAV */
#desktop-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 2rem;
  cursor: default;
  margin-right: auto;
}

/* HAMBURGER MENU */
.navbar {
  width: 2rem;
  height: 2rem;
}

.container {
  width: 90%;
  margin: auto;
}

.navbar .nav-container li {
  list-style: none;
}

/* TO DO: Fix alignment */
.navbar .nav-container a {
  display: flex;
  font-size: 2rem;
  padding-inline: 1rem;
  text-decoration: none;
}

.navbar .nav-container a:hover {
  text-decoration: underline;
  text-underline-offset: 0.5rem;
  text-decoration-color: black;
}
.nav-container .checkbox {
  display: none;
}

.menu-items {
  height: 100vh;
  width: 100%;
  display: flex;
  text-align: center;
  margin-left: -8.6rem;
  margin-top: -0.6rem;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 1.6rem;
  }
  .navbar .nav-container a:hover {
    font-weight: bolder;
  }

  .nav-container {
    display: block;
    position: relative;
    width: 100%;
  }
  .nav-container .checkbox {
    cursor: pointer;
    display: block;
    height: 2rem;
    opacity: 0;
    position: absolute;
    width: 2rem;
    z-index: 4;
    margin-left: -0.5rem;
  }

  .nav-container .hamburger-lines {
    display: flex;
    flex-direction: column;
    height: 2rem;
    justify-content: space-around;
    position: absolute;
    width: 2rem;
    z-index: 3;
    margin-left: -0.5rem;
  }

  .nav-container .hamburger-lines .line {
    display: block;
    height: 0.25rem;
    width: 100%;
    border-radius: 0.625rem;
    background: black;
  }

  .nav-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .nav-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .nav-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 80px;
    box-shadow: inset 0 0 125rem white;
    height: 100vh;
    width: 100%;
    transform: translate(150%);
    display: flex;
    flex-direction: column;
    margin-left: -9.375rem;
    padding-left: 3.125rem;
    transition: transform 0.5s ease-in-out;
    text-align: center;
  }

  .navbar .menu-items li {
    margin-bottom: 1.1rem;
    font-size: 2rem;
  }

  .nav-container input[type='checkbox']:checked ~ .menu-items {
    transform: translateX(0);
  }

  .nav-container input[type='checkbox']:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .nav-container input[type='checkbox']:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .nav-container input[type='checkbox']:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }

  .nav-container input[type='checkbox']:checked ~ .logo {
    display: none;
  }
  .overlay {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 0rem;
    left: 9.375rem;
    width: 100%;
    height: 100%;
    background-color: white;
    padding-right: 40px;
    padding-bottom: 40rem;
    z-index: 2;
  }
}
</style>
