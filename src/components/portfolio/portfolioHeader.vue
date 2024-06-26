<template>
  <header id="home">
    <nav class="nav-container">
      <router-link :to="{ name: 'Portfolio' }">
        <h1 class="title"> {{ title }}</h1>
      </router-link>
      <div id="menu">
        <ul
          id="menu-items"
          :style="{ transform: !isCheckboxChecked ? 'translateX(0)' : 'translateX(-140%)' }"
        >
        <li><router-link :to="{ path: '/', hash: '#projects' }">Projects</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#skills' }">Skills</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#about' }">About</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#contact' }">Contact</router-link></li>
        </ul>
        <!-- menu for mobile format -->
        <div id="hamburger" class="menu-container menu-size">
          <input
            id="menu-checkbox"
            class="absolute menu-size"
            type="checkbox"
            v-model="isCheckboxChecked"
          />
          <div id="hamburger-lines" class="absolute menu-size">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isCheckboxChecked: false
    }
  },
  props: {
    title: String
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  color: black;
}

.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 10vh;
}

.title {
  font-size: 2rem;
  cursor: pointer;
  margin-right: auto;
}

#menu {
  display: flex;
  align-items: center;
}

#menu-items {
  display: flex;
  align-items: center;
  cursor: pointer;
}

#menu-items li {
  list-style: none;
  margin-right: 1rem;
  font-size: 2rem;
}

#menu-items li:hover {
  text-decoration: underline;
  text-underline-offset: 0.6rem;
  text-decoration-color: black;
}

#menu-checkbox {
  display: none;
}

@media screen and (max-width: 768px) {
  #menu-items {
    background-color: white;
    box-shadow: inset 0 0 125rem white;
    height: 100vh;
    width: 100%;
    padding-top: 5rem;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    transition: transform 0.5s ease-in-out;
    top: 0rem;
    left: 140vw;
    z-index: 2;
    gap: 1rem;
  }

  #menu-items li:hover {
    font-weight:600;
    text-decoration: none;
  }

  .menu-container {
    margin: auto;
    position: relative;
  }

  .menu-size {
    width: 2rem;
    height: 2rem;
  }

  #menu-checkbox {
    display: inline-block;
    cursor: pointer;
    opacity: 0;
    z-index: 4;
  }
  
  input[id='menu-checkbox']:checked ~ #hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  input[id='menu-checkbox']:checked ~ #hamburger-lines .line2 {
    transform: scaleY(0);
  }

  input[id='menu-checkbox']:checked ~ #hamburger-lines .line3 {
    transform: rotate(-45deg);
  }

  .absolute {
    position: absolute;
    top: 0;
    right: 0;
  }

  #hamburger-lines {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    position: absolute;
    z-index: 3;
  }

  #hamburger-lines .line {
    display: block;
    height: 0.25rem;
    width: 100%;
    border-radius: 0.625rem;
    background: black;
  }

  #hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  #hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  #hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  /* TODO: Look at everything proportionally */
  @media screen and (max-width: 370px){
    .title {
      font-size: 1.8rem;
    }
  }

}
</style>
