<template>
  <main class="to-do-notes">
    <div  v-if="task">
      <ToDoHeader/>
      <ToDoNotes :task="task" />
      <ToDoFooter class="footer"/>
    </div>
    <div class="loading" v-else>
      <p>Loading...</p>
    </div>
  </main>
</template>

<script>
import ToDoHeader from "@/components/ToDo/ToDoHeader.vue";
import ToDoNotes from "@/components/ToDo/ToDoNotes.vue";
import ToDoFooter from "@/components/ToDo/ToDoFooter.vue";
import { useToDoStore } from "@/stores/ToDoStore";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "ToDoNotesView",
  components: { ToDoNotes, ToDoFooter, ToDoHeader },

  setup() {
       const todoStore = useToDoStore();

    // Get id from route params
    const route = useRoute();
    const id = parseInt(route.params.id);

    //If the tasks have not been fetched, the task computed property would not be able to find the task and would return null
    todoStore.fetchTasks();

    // Get task from store with the id I got from the route
    const task = computed(() => {
      if (todoStore.loading === false) {
        return todoStore.getTaskById(id);
      } else {
        return null;
      }
    });

    return {
      task,
    };
  },
};
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

.to-do-notes {
  background-color: #078080;
  min-height: 100vh;
}
/* TO DO: Fix the footer at the bottom using flex and last child */
.footer {
  margin-top: 32rem;
}
</style>