<template>
  <div class="all-container" role="main">
    <header>
      <GeneralHeader />
    </header>
    <main>
      <section>
        <h2>Projects</h2>
        <div class="card-container">
          <article class="card">
            <h3>To Do</h3>
            <p>
              Explore my website for essential To-Dos. Add, favorite, delete tasks, and write notes easily.
            </p>
            <nav>
              <router-link class="link" :to="{ name: 'ToDo' }"
                ><p>Click here to go to the web</p>
              </router-link>
            </nav>
          </article>
          <article class="card">
            <h3>Express Yourself</h3>
            <p>
              Discover my lovely sportswear shop, offering cute outfits & accessories for active lifestyles.
            </p>
            <nav>
              <router-link class="link" :to="{ name: 'ProjectsWip' }"
                ><p>Click here to go to the web</p>
              </router-link>
            </nav>
          </article>
          <article class="card">
            <h3>Silly Games</h3>
            <p>
              Enjoy quick laughs and entertainment on my website with amusing short games to pass the time.
            </p>
            <nav>
              <router-link class="link" :to="{ name: 'ProjectsWip' }"
                ><p>Click here to go to the web</p>
              </router-link>
            </nav>
          </article>
        </div>
      </section>
    </main>

    <footer>
      <GeneralFooter />
    </footer>
  </div>
</template>
<script>
import GeneralHeader from "@/components/GeneralHeader.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
export default {
  name: "ProjectsDisplay",
  components: {
    GeneralHeader,
    GeneralFooter,
  },
};
</script>
<style scoped>
.all-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100svh;
  margin: 0;
  font-family: "Poppins";
  background: linear-gradient(to bottom, #f2f2f2, white);
  padding-bottom: 3rem;
}

.card-container {
  display: flex;
}

main > h2 {
  text-align: center;
  font-size: 1.5em;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
.card {
  grid-column: span 4;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 3px 3px 12px 0px rgb(0, 0, 0, 0.2);
  /* right - bottom - difuse - all sides*/
  margin-right: 2rem;
  margin-left: 2rem;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.2);
}
.link {
  text-decoration: none;
  color: #0e2431;
}

.link:hover {
  color: #e25555;
}

.link p {
  font-weight: 600;
}

footer {
  margin-bottom: -1.5rem;
}
@media screen and (max-width: 960px) {
  /* main > h2 {
    margin-top: 1.5rem;
    margin-bottom: -0.2rem;
  } */
  .card-container {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .card {
    margin-bottom: 3rem;
  }
}
</style>
