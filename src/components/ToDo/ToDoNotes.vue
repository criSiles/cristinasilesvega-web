<template>
  <main>
    <div class="notes-section">
      <h3 class="note-title">Notes</h3>
      <p class="task-title">{{ task.title }}</p>
      <div class="textarea">
        <textarea
          class="custom-textarea"
          ref="autoTextarea"
          @input="adjustTextareaHeight"
          v-model="message"
          :style="{ height: textareaHeight + 'px' }"
        ></textarea>
      </div>
      <button class="save-button" @click="saveInput">Save</button>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useToDoStore } from '@/stores/ToDoStore'

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const taskVar = ref(null)
    taskVar.value = props.task
    const message = ref(null)
    message.value = props.task.notes
    console.log('This is the message value:', message.value)
    const saveInput = () => {
      useToDoStore().addNotes(taskVar.value.id, message.value)
    }
    const textareaHeight = ref(10)
    const autoTextarea = ref(null)
    const adjustTextareaHeight = () => {
      const textarea = autoTextarea.value
      textarea.style.height = 'auto' // Reset the height to auto
      textarea.style.height = textarea.scrollHeight + 'px' // Set the height to the scrollHeight
    }

    onMounted(() => {
      adjustTextareaHeight() // Call the function initially to set the correct height
    })
    return {
      taskVar,
      message,
      textareaHeight,
      autoTextarea,
      adjustTextareaHeight,
      saveInput
    }
  }
}
</script>
<style>
.notes-section {
  max-width: 37.5rem;
  margin: 0 auto;
}

.note-title {
  font-size: 2rem;
  color: white;
  margin-top: 2.2rem;
  margin-bottom: 1rem;
}

.task-title {
  color: #abd1c6;
  margin-bottom: 20px;
}

.textarea {
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
}

/* TODO: Delete the textarea default blue shadow border  */
.custom-textarea {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #f3f3f3;
  border-radius: 0.375rem;
  resize: vertical;
  background-color: #f3f3f3;
}

.save-button {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 1.3rem;
  font-size: 1rem;
  border: 0;
  border-radius: 0.375rem;
  background-color: #ff8e3c;
  color: white;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.save-button:hover {
  background-color: #abd1c6;
  color: white;
}
</style>
