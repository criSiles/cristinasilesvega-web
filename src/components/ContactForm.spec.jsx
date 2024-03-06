// FILEPATH: /d:/_code/Web/cristinasilesvega-web/tests/unit/ContactForm.spec.jsx
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue'


describe('renders correctly', () => {
  it('renders the form', () => {
    const wrapper = mount(ContactForm)
    expect(wrapper.html()).toMatchSnapshot()
    // snpashot is a file that contains the html of the component
    // if the html changes, the snapshot will fail
    // if the html changes and the change is correct, you can update the snapshot
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
})

// Add more tests as needed
