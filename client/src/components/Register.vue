<template>
  <v-layout column>
    <v-flex .col-md-6 .offset-md-3>
      <panel title="Register">
        <form
          name="broadkast-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <!-- v-model is the element checking  -->
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            autocomplete="new-password"
        ></v-text-field>
        </form>
        <br>
        <div class="error" v-html="error" />
        <v-btn dark class="cyan" @click="register"> Register </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default{
  // set the default data
  data () {
    return {
      email: '',
      password: '',
      error: null
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
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.token)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
  // change the field of email to hello world after 2s
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 2000)
  // }
}
</script>

<style scoped>
</style>
