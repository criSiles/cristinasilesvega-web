<template>
  <footer class="to-do-footer">
    <router-link :to="{ name: 'Portfolio' }">
      <i class="material-icons"> home </i>
      <p class="todo-footer-text">Go back to cristinasilesvega's web</p>
    </router-link>
  </footer>
</template>

<style scoped>
.to-do-footer {
  width: 100%;
  background: #078080;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-top: auto;
}

.todo-footer-text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #ffffff;
  margin-top: -0.3rem;
  margin-bottom: 0.3rem;
}

/* I have to scope the style bc there are other material-icon class in ToDoDetails */
.material-icons {
  font-size: 3rem;
  cursor: pointer;
  color: #abd1c6;
}

</style>
