<template>
  <div class="task">
    <h3 class="task-text" :class="{ completed: task.completed }">{{ task.title }}</h3>
    <div class="icons">
      <i @click="todoStore.deleteTask(task.id)" class="material-icons"> delete </i>
      <i
        @click="todoStore.toggleFav(task.id)"
        class="material-icons"
        :class="{ activeLike: task.isFav }"
      >
        favorite
      </i>
      <i
        @click="todoStore.toggleDone(task.id)"
        class="material-icons"
        :class="{ activeDone: task.completed }"
      >
        done
      </i>
      <router-link :to="{ name: 'ToDoNotesView', params: { id: task.id } }">
        <i class="material-icons"> edit_note </i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useToDoStore } from '@/stores/ToDoStore'

export default {
  props: ['task'],
  setup() {
    const todoStore = useToDoStore()

    return { todoStore }
  }
}
</script>

<style>
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.25rem 2vw 0;
  padding: 0.8rem 1.25rem;
  border-bottom: 1px solid #abd1c6;
  background-color: #f3f3f3;
  border-radius: 0.375rem;
}

.task-text {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;;
  font-size: 1rem;
  color: #555;
}

.completed {
  text-decoration: line-through;
}

.icons {
  display: flex;
  text-align: right;
}

.material-icons {
  font-size: 1.4em;
  margin-left: 6px;
  cursor: pointer;
  color: #bbb;
}

.material-icons.activeLike {
  color: #ff005d;
}

.material-icons.activeDone {
  color: green;
}
</style>
