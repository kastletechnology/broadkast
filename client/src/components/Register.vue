<template>
  <div>
    <h1> Register </h1>

    <input type="email" name="email" v-model="email" placeholder="email"/>
    <br>
    <!-- v-model is the element checking  -->
    <input type="password" name="password" v-model="password" placeholder="password"/>
    <br>
    <button @click="register"> Register </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default{
  // set the default data
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  // check the change of the email
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  // change the field of email to hello world after 2s
  mounted () {
    setTimeout(() => {
      this.email = 'hello world'
    }, 2000)
  }
}
</script>
