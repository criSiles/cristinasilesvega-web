import { test } from 'vitest'
import { mount } from '@vue/test-utils'
import ToDoForm from '@/components/ToDoForm.vue'
import { useToDoStore } from '@/stores/ToDoStore'

// Mocking the store: Jest will replace the actual implementation of ToDoStore with a mock version

test.describe('ToDoForm.vue', () => {
  let wrapper
  let mockStore

  test.beforeEach(() => {
    mockStore = {
      // The store has a lot of data, getters and actions but, we only need for these test tasks and addTask
      tasks: [],
      //  Creating a mock function for the addTask method
      addTask: jest.fn(),
    };
    // Whenever useToDoStore is called in the tests, it will always return the value mockStore
    useToDoStore.mockReturnValue(mockStore);
    wrapper = mount(ToDoForm);
  })

  test('renders a form', () => {
    test.expect(wrapper.find('form').exists()).toBe(true)
  })

  test('renders an input field and a button', () => {
    test.expect(wrapper.find('input').exists()).toBe(true)
    test.expect(wrapper.find('button').exists()).toBe(true)
  })

  test('calls handleSubmit when form is submitted', async ({ expect }) => {
    const input = wrapper.find('input')
    await input.setValue('Test task')
    await wrapper.find('form').trigger('submit.prevent')

    expect(mockStore.addTask).toHaveBeenCalled()
    expect(mockStore.addTask).toHaveBeenCalledWith(expect.objectContaining({
      id: expect.any(Number),
      title: 'Test task',
      completed: false
    }))
  })

  test('clears the input field after form submission', async ({ expect }) => {
    const input = wrapper.find('input')
    await input.setValue('Test task')
    await wrapper.find('form').trigger('submit.prevent')

    expect(input.element.value).toBe('')
  })
})