<template>
  <header class="to-do-header">
    <router-link :to="{ name: 'ToDo' }">
      <div class="todo-header-title">
        <img class="todo-header-img" alt="Orange logo" src="../../assets/orange.webp" />
        <h1>To-Do</h1>
      </div>
    </router-link>
  </header>
</template>

<style>
.to-do-header {
  width: 100%;
  background: #abd1c6;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.todo-header-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  padding-top: 0.6rem;
  color: #ffffff;
  transition: transform 0.4s ease-in-out;
}

.todo-header-img {
  max-width: 3rem;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  transition: transform 0.4s ease-in-out; 
}

.todo-header-img:hover {
  transform: scale(1) translate(5px, 5px) rotate(360deg); 
}
</style>
