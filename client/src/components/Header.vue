<template>
  <v-toolbar fixed class="white selfbar">
    <v-toolbar-title class="mr-4">
      <span
       class="home"
       style="color: #0069b3"
       @click="navigateTo({name: 'root'})">
       Broadkast
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        depressed small color="yellow darken-2"
        :to="{
          name: 'songs'
        }">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <Search />
    <v-toolbar-items>
      <div v-if = "!$store.state.isUserLoggedIn">
        <Login />
      </div>

      <v-btn
        v-if = "!$store.state.isUserLoggedIn"
        depressed small color="yellow darken-2"
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>

      <v-btn
        v-if = "$store.state.isUserLoggedIn"
        depressed small color="yellow darken-2"
        @click="logout">
        Log out
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Login from '@/components/Login'
import Search from '@/components/Songs/SongsSearchPanel'
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      console.log('I am logging out now')
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to homepage
      this.$router.push({
        name: 'root'
      })
    }
  },
  components: {
    Login,
    Search
  }
}
</script>

<style scoped>
.selfbar {
  border-top: 5px solid #0069b3 !important;
}

.home {
    cursor: pointer;
}

.home:hover {
    color: black;
}

input[type=search] {
  cursor: pointer;
  display: block;
  width: 400px;
  border-left: 100px;
  letter-spacing: 4px;
}

*::-webkit-search-cancel-button {
    -webkit-appearance: searchfield-cancel-button;
}
</style>
