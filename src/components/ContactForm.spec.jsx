// FILEPATH: /d:/_code/Web/cristinasilesvega-web/tests/unit/ContactForm.spec.jsx
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue'

describe('renders correctly', () => {
    it('renders the form', () => {
        const wrapper = mount(ContactForm)
        expect(wrapper.html()).toMatchSnapshot()
    })
    it ('renders the form with the correct fields', () => {
    const wrapper = mount(ContactForm)
    expect(wrapper.find('input[name="name"]').exists()).toBe(true)
    expect(wrapper.find('input[name="email"]').exists()).toBe(true)
    expect(wrapper.find('textarea[name="message"]').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
    })
    it('renders the form with the correct labels', () => {
        const wrapper = mount(ContactForm)
        expect(wrapper.find('label[for="name"]').text()).toBe('Name')
        expect(wrapper.find('label[for="email"]').text()).toBe('Email')
        expect(wrapper.find('label[for="message"]').text()).toBe('Message')
    })
})

// Add more tests as needed