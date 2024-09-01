<template>
  <main class="to-do-app">
    <ToDoHeader />
    <ToDoForm />
    <ToDoList :tasks="tasks" :loading="loading" />
    <ToDoFooter class="footer" />
  </main>
</template>

<script>
import ToDoHeader from '@/components/ToDo/ToDoHeader.vue'
import ToDoList from '@/components/ToDo/ToDoList.vue'
import ToDoForm from '@/components/ToDo/ToDoForm.vue'
import ToDoFooter from '@/components/ToDo/ToDoFooter.vue'
import { useToDoStore } from '@/stores/ToDoStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'ToDoView',
  meta: {
    hideFooter: true
  },
  components: {
    ToDoForm,
    ToDoList,
    ToDoHeader,
    ToDoFooter
  },
  setup() {
    const todoStore = useToDoStore()
    const { tasks, loading } = storeToRefs(todoStore)

    todoStore.fetchTasks()

    return { todoStore, tasks, loading }
  }
}
</script>

<style scoped>
.loading {
  max-width: 640px;
  border: 1px solid #ffd859;
  background: #ffe9a0;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}

.to-do-app {
  background-color: #078080;
  min-height: 100vh;
  position: relative; 
  padding-bottom: 100px;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Adjust height as needed */
  height: 100px; /* Example height */
}
</style>
