import { test } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue'

test.describe('ContactForm.vue', () => {
  let wrapper

  test.beforeEach(() => {
    wrapper = mount(ContactForm)
  })

  test('renders correctly', () => {
    test.expect(wrapper.exists()).toBe(true)
  })

  test('form fields are empty initially', () => {
    test.expect(wrapper.vm.email).toBe('')
    test.expect(wrapper.vm.name).toBe('')
    test.expect(wrapper.vm.mobile).toBe('')
    test.expect(wrapper.vm.role).toBe('recruiter')
    test.expect(wrapper.vm.terms).toBe(false)
  })

  test('form fields update when data is entered in the input', async ({ expect }) => {
    const email = 'test@example.com'
    await wrapper.find('input[type="email"]').setValue(email)
    expect(wrapper.vm.email).toBe('test@example.com')

    const name = 'Cris'
    const mobile = '1234567890'
    const role = 'developer'

    await fillSubmitInputs(wrapper, email, name, role, mobile)

    expect(wrapper.vm.name).toBe('Cris')
    expect(wrapper.vm.mobile).toBe('1234567890')
    expect(wrapper.vm.role).toBe('developer')
    expect(wrapper.vm.terms).toBe(true)
  })

  test('form submission works correctly', async ({ expect }) => {
    const submitForm = jest.spyOn(wrapper.vm, 'handleSubmit')
    await wrapper.find('form').trigger('submit.prevent')
    expect(submitForm).toHaveBeenCalled()
  })

  test('shows error message if mobile length is under 9', async ({ expect }) => {
    const number = '12345'
    await fillSubmitInputs(wrapper, 'hola@hola.com', 'hola', 'developer', number)
    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.mobileError).toBe(true)
  })
})

async function fillSubmitInputs(wrapper, email, name, role, mobile) {
  await wrapper.find('input[type="email"]').setValue(email)
  await wrapper.find('input[type="text"]').setValue(name)
  await wrapper.find('option[type="role"]').setValue(role)
  await wrapper.find('input[type="tel"]').setValue(mobile)
  await wrapper.find('input[type="checkbox"]').setChecked()
}