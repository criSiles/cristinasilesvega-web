<template>
  <div class="contact">
    <h1 class="title">Contact</h1>
    <form class="contact-form" @submit="handleSubmit($event)">
      <label class="contact-label">Email:</label>
      <input
        class="contact-input-select"
        type="email"
        required
        v-model.trim="email"
        placeholder="phoebe@gmail.com"
      />
      <div v-if="emailError">Please enter a valid email</div>
      <label class="contact-label">Name:</label>
      <input
        class="contact-input-select"
        type="text"
        required
        v-model.trim="name"
        placeholder="Phoebe Buffay"
      />
      <div v-if="nameError">Please enter your name</div>

      <label class="contact-label">Mobile:</label>
      <input
        class="contact-input-select"
        type="tel"
        required
        v-model.trim="mobile"
        placeholder="600600600"
      />
      <div v-if="mobileError">The mobile has to be 9 numbers</div>

      <label class="contact-label"> Role: </label>
      <select class="contact-input-select" required v-model="role">
        <option type="role" value="developer">Web Developer</option>
        <option type="role" value="recruiter">Recruiter</option>
        <option type="role" value="student">Web Student</option>
        <option type="role" value="other">Other</option>
      </select>
      <input
        class="contact-input-select"
        v-if="role === 'other'"
        v-model="customRole"
        placeholder="Write your role"
      />

      <div class="accept">
        <div class="terms">
          <input class="checkbox" type="checkbox" required v-model="terms" />
          <label>Accept terms and conditions</label>
        </div>

        <div class="submit">
          <button>Send</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// the relevant methods
import { collection, addDoc } from 'firebase/firestore'
// the firestore instance
// import db from '../firebase/init.js';
import dbFirestore from '../firebase/init.js'

export default {
  data() {
    return {
      email: '',
      name: '',
      mobile: '',
      role: 'recruiter',
      customRole: '',
      emailError: false,
      nameError: false,
      mobileError: false,
      roleError: false,
      terms: false
    }
  },
  methods: {
    handleRoleChange() {
      if (this.role !== 'other') {
        this.customRole = this.role
      }
    },
    handleSubmit(e) {
      // Prevent the default submit action
      e.preventDefault()

      // Validate the form fields
      this.emailError = !this.email.includes('@')
      this.nameError = this.name.trim() === ''
      this.mobileError = this.mobile.trim().length < 9
      this.roleError = this.role.trim() === ''
      console.log('Validating', this.emailError, this.nameError, this.mobileError, this.roleError)

      // If there are no error, we can submit the data to Firebase
      if (!this.emailError && !this.nameError && !this.mobileError && !this.roleError) {
        // Uses the Firebase Database API to add a new document to the "message" collection
        console.log('dbFirestore', dbFirestore)
        const messagesRef = collection(dbFirestore, 'contact-form')
        console.log('messagesRef', messagesRef)

        addDoc(messagesRef, {
          name: this.name,
          email: this.email,
          mobile: this.mobile,
          role: this.role === 'other' ? this.customRole : this.role,
          terms: this.terms,
          time: new Date()
        })
          .then((docRef) => {
            console.log('Document written with ID: ', docRef.id)
          })
          // If the document was added successfully, reset the form
          .then(() => {
            this.name = ''
            this.email = ''
            this.mobile = ''
            this.role = ''
            this.terms = false
          })
          // If there was an error adding the document, log it to the console
          .catch((error) => {
            console.error('Error adding document: ', error)
          })
      }
    }
  }
}
</script>

<style scoped>
* {
  color: #0e2431;
}
.contact {
  margin-bottom: 5rem;
}
.title {
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: -2rem;
}
.contact-form {
  max-width: 40rem;
  margin: 1.8rem auto;
  margin-top: 5rem;
  background: #e7e7e7;
  text-align: left;
  padding: 2rem;
  border-radius: 10px;
}

.contact-label {
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 1em;
  letter-spacing: 1px;
  font-weight: 600;
}

.contact-input-select {
  display: block;
  padding: 0.625rem;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.375rem;
  border-bottom: 1px solid #e7e7e7;
  font-size: 1em;
}

.accept {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.terms {
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.checkbox {
  display: inline-block;
  padding: 0.625rem;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.375rem;
  border-bottom: 1px solid #e7e7e7;
  font-size: 1rem;
  margin-right: 0.5rem;
}

.submit button {
  margin-top: 2rem;
  border-radius: 0.375rem;
  border: 4px solid white;
  font-size: 0.9rem;
  background-color: white;
  padding: 0.5rem 1rem;
}
.submit button:hover {
  background-color: #0e2431;
  color: #e7e7e7;
  border: 4px solid #0e2431;
}

@media screen and (max-width: 768px) {
  .title {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .accept {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  .terms {
    font-size: 0.7rem;
  }

  .submit {
    margin-top: 0.4rem;
  }
}
</style>
