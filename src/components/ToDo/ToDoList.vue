<template>
  <!-- Task buttons-->
  <div class="tasks-section">
    <button  class="toggle-taskview-button"
      @click="showAllTasks"
    >
      All tasks
    </button>

    <button class="toggle-taskview-button"
      @click="showFavTasks"
    >
      Fav tasks
    </button>

    <button  class="toggle-taskview-button"
      @click="showDoneTasks"
    >
      Done tasks
    </button>
  </div>

  <!-- Task list -->
  <div class="task-list">
    <div v-if="!loading">
      <div v-for="task in paginatedTasks" :key="task.id">
        <ToDoDetails :task="task" />
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>

    <PaginationItem
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page-changed="onPageChanged"
    />
  </div>
</template>

<script>
import PaginationItem from "./PaginationItem.vue";
import ToDoDetails from "./ToDoDetails.vue";
import { ref, computed } from "vue";

export default {
  components: {
    ToDoDetails,
    PaginationItem,
  },
  props: ["tasks", "loading"],
  setup(props) {
    console.log("SETUP");

    // --------------------------------
    // Variables
    // --------------------------------
    const PAGE_SIZE = 4;
    const currentPage = ref(1);

    const currentView = ref("all");

    // --------------------------------
    // Computed
    // --------------------------------

    const filteredTasks = computed(() => {
      console.log("tasks changed", props.tasks);
      console.log("currentView", currentView.value);

      let tempTasks = props.tasks;

      switch (currentView.value) {
        case "fav":
          tempTasks = tempTasks.filter((task) => task.isFav);
          console.log("fav tasks", tempTasks);
          break;
        case "done":
          tempTasks = tempTasks.filter((task) => task.completed);
          break;
        case "all":
          break;
        default:
          break;
      }

      console.log("tempTasks", tempTasks);

      return tempTasks;
    });

    const paginatedTasks = computed(() => {
      var start = (currentPage.value - 1) * PAGE_SIZE;
      var end = start + PAGE_SIZE;

      var result = [];
      if (filteredTasks.value.length !== 0) {
        result = filteredTasks.value.slice(start, end);
      }

      return result;
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredTasks.value.length / PAGE_SIZE);
    });

    // --------------------------------
    // Methods
    // --------------------------------

    const showAllTasks = () => {
      currentView.value = "all";
    };

    const showFavTasks = () => {
      currentView.value = "fav";
    };

    const showDoneTasks = () => {
      currentView.value = "done";
    };

    const onPageChanged = (page) => {
      console.log("Page changed to: " + page);
      currentPage.value = page;
    };

    console.log("currentPage", currentPage.value);
    console.log("total pages", totalPages.value);

    return {
      currentView,
      showAllTasks,
      showFavTasks,
      showDoneTasks,
      filteredTasks,
      onPageChanged,
      currentPage,
      totalPages,
      paginatedTasks,
    };
  },
};
</script>

<style>
.tasks-section {
  margin: 0.3125vw;
  padding: 0.625vw;
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 0.25vw;
  overflow: hidden;
}

.task-list {
  margin: 1.25rem auto;
  max-width: 40rem;
}

.toggle-taskview-button {
  display: inline-block;
  background: #ff8e3c;
  border: 0;
  padding: 0.625rem;
  margin-left: 1vw;
  margin-bottom: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  transition: background-color 0.3s, color 0.3s;
}

.toggle-taskview-button:hover {
  background-color: #abd1c6;
  color: white;
}

.toggle-taskview-button:focus {
  background-color: #abd1c6
}
</style>