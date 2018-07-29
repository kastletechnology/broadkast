<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn slot="activator"
             v-if = "!$store.state.isUserLoggedIn"
             depressed small color="yellow darken-2">Log In</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Log In</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Email"  v-model="email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password"  v-model="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <div class="error" v-html="error" />
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="login">Login</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
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
      error: null,
      dialog: false
    }
  },
  // check the change of the email
  watch: {
    email (value) {
      console.log('email has changed', value)
      console.log('show dialog status', this.dialog)
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
        this.dialog = false
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    setDialog () {
      this.dialog = true
    }
  }
}
</script>

<style scoped>

</style>
