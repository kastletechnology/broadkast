<template>
  <v-layout column>
    <v-flex xs10 offset-xs1>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toobar-title> Register</v-toobar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <input type="email" name="email" v-model="email" placeholder="email"/>
          <br>
          <!-- v-model is the element checking  -->
          <input type="password" name="password" v-model="password" placeholder="password"/>
          <br>
          <div class="error" v-html="error" />
          <v-btn class="cyan" @click="register"> Register </v-btn>
        </div>
      </div>
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
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
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
.error {
  color: red;
}
</style>
