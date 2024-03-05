<template>
  <main class="all-container">
    <GeneralHeader />
    <section>
      <h1 class="title">Projects</h1>
      <div class="card-container">
        <article class="card">
          <h2>To Do</h2>
          <p>
            Explore my website for essential To-Dos. Add, favorite, delete tasks, and write notes
            easily.
          </p>
          <nav>
            <router-link class="link" :to="{ name: 'ToDo' }"
              ><p>Click here to go to the web</p>
            </router-link>
          </nav>
        </article>
        <article class="card">
          <h2>Express Yourself</h2>
          <p>
            Discover my lovely sportswear shop, offering cute outfits & accessories for active
            lifestyles.
          </p>
          <nav>
            <router-link class="link" :to="{ name: 'Shop' }"
              ><p>Click here to go to the web</p>
            </router-link>
          </nav>
        </article>
        <article class="card">
          <h2>Silly Games</h2>
          <p>
            Enjoy quick laughs and entertainment on my website with amusing short games to pass the
            time.
          </p>
          <nav>
            <router-link class="link" :to="{ name: 'ProjectsWip' }"
              ><p>Click here to go to the web</p>
            </router-link>
          </nav>
        </article>
      </div>
    </section>

    <GeneralFooter />
  </main>
</template>
<script>
import GeneralHeader from '@/components/GeneralHeader.vue'
import GeneralFooter from '@/components/GeneralFooter.vue'
export default {
  name: 'ProjectsDisplay',
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
  min-height: 100svh;
  background: linear-gradient(to bottom, #f2f2f2, white);
}

.title {
  text-align: center;
  font-size: 2rem;
  margin: 2rem 0;
  color: #0e2431;
}

.card-container {
  display: flex;
  gap: 1rem; /* Added space between cards */
}

.card {
  grid-column: span 4;
  background-color: #fff;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 3px 3px 12px 0px rgb(0, 0, 0, 0.2);
  /* right - bottom - difuse - all sides*/
  margin: 0 2rem;
  font-size: 1rem;
  color:#0e2431
}

.card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
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
  margin-top: 0.5rem;
  font-weight: 600;
}

@media screen and (max-width: 960px) {
  .card-container {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .card {
    margin-bottom: 2rem;
  }
}
</style>
