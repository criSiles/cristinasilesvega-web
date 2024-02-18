// FILEPATH: /d:/_code/Web/cristinasilesvega-web/tests/unit/ContactForm.spec.jsx
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue'
import { addDoc } from 'firebase/firestore'
import sinon from 'sinon'

// Wrap addDoc in a function that you can spy on
const firestore = {
  addDoc: (...args) => addDoc(...args)
}

describe('renders correctly', () => {
  // Create a stub for addDoc
  const addDocStub = sinon.stub(addDoc, 'addDoc').returns(Promise.resolve({ id: 'testId' }))

  it('renders the form', () => {
    const wrapper = mount(ContactForm)
    expect(wrapper.html()).toMatchSnapshot()
    // snpashot is a file that contains the html of the component
    // if the html changes, the snapshot will fail
    // if the html changes and the change is correct, you can update the snapshot
    // with the command jest --updateSnapshot
    // or jest -u for short
  })
  it('renders the form with the correct fields', () => {
    const wrapper = mount(ContactForm)
    console.log(wrapper.html())
    expect(wrapper.find('input[id="email"]').exists()).toBe(true)
    expect(wrapper.find('input[id="name"]').exists()).toBe(true)
    expect(wrapper.find('input[id="mobile"]').exists()).toBe(true)
    expect(wrapper.find('select[id="role"]').exists()).toBe(true)
    expect(wrapper.find('input[id=termsAndConditionsCheckbox]').exists()).toBe(true)
    expect(wrapper.find('button[id="submit"]').exists()).toBe(true)
  })
  it('submits the form correctly', async () => {
    // Create a stub for firestore.addDoc
    const addDocStub = sinon.stub(firestore, 'addDoc').returns(Promise.resolve({ id: 'testId' }))

    const wrapper = mount(ContactForm)
    await wrapper.find('input[id="email"]').setValue('hola@hola.com')
    await wrapper.find('input[id="name"]').setValue('hola')
    await wrapper.find('input[id="mobile"]').setValue('123456789')
    await wrapper.find('select[id="role"]').setValue('developer')
    await wrapper.find('input[id=termsAndConditionsCheckbox]').setChecked()
    await wrapper.find('button[id="submit"]').trigger('click')

    // Wait for promises to resolve
    await wrapper.vm.$nextTick()

    // Check that firestore.addDoc was called with the correct arguments
    sinon.assert.calledWith(addDocStub, 'contact-form', {
      name: 'hola',
      email: 'hola@hola.com',
      mobile: '123456789',
      role: 'developer',
      terms: true,
      time: sinon.match.date
    })

    // Restore the original function
    addDocStub.restore()
  })
})

// Add more tests as needed
