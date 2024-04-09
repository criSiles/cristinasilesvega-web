<template>
  <form class="add-task" @submit.prevent="handleSubmit">
    <input class="add-task-input" type="text" placeholder="Add a to do" v-model="newTask" />
    <button class="add-button" type="submit">Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useToDoStore } from "@/stores/ToDoStore";

// Composition API
export default {
  setup() {
    const newTask = ref("");
    const handleSubmit = () => {
      console.log("submit");
      console.log(newTask.value);

      useToDoStore().addTask({
        id: Math.floor(Math.random() * 10000),
        title: newTask.value,
        completed: false,
      });
      newTask.value = "";

      console.log(useToDoStore().tasks);
    };
    return {
      newTask,
      handleSubmit,
    };
  },
};
</script>

<style>
.add-task {
  max-width: 40rem;
  margin: 1.25rem auto; 
  display: grid;
  grid-template-columns: 3fr 1fr; 
  gap: 1rem;
  padding: 1rem; 
  margin-top: 2rem;
  padding-bottom: 0.4rem;
}

/* TO DO: Delete the default blue box shadow when the input is clicked */
.add-task-input {
  padding: 0.625rem; 
  border-radius: 0.375rem; 
  color: #555;
  font-size: 1rem;
  width: 100%;
  background-color: #f3f3f3;
}

.add-button {
  background: #ff8e3c;
  border: 0;
  padding: 0.625rem; 
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  transition: background-color 0.3s, color 0.3s;
}

.add-button:hover {
  background-color: #abd1c6;
  color: white;
}
</style>
