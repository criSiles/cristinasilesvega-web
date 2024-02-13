// FILEPATH: /d:/_code/Web/cristinasilesvega-web/src/components/ToDoList.test.ts
import { test } from 'vitest'
import assert from 'assert'
import { addTask } from './ToDoList.vue'

test('addTask', () => {
  const tasks = []
  addTask(tasks, 'New task')
  assert.strictEqual(tasks[tasks.length - 1], 'New task')
})