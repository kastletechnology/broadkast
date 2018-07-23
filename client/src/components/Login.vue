<template>
  <v-layout column>
    <v-flex .col-md-6 .offset-md-3>
      <panel title="Login">
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
      ></v-text-field>
        <br>
        <div class="error" v-html="error" />
        <v-btn dark class="cyan" @click="login"> Login </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
