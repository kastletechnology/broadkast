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
        @click="navigateTo({name:'songs'})">
        Browse
      </v-btn>
    </v-toolbar-items>
    <div style="padding-left: 50px;">
      <form role="search">
        <div class="search-control">
          <input type="search" id="site-search" name="q"
                placeholder="Search the site..."
                aria-label="Search through site content"
          />
        </div>
      </form>
    </div>


    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn
          v-if = "!$store.state.isUserLoggedIn"
          depressed small color="yellow darken-2"
          @click="navigateTo({name:'login'})">
          Login
        </v-btn>
      <!-- <router-link to="register"> -->
        <v-btn
          v-if = "!$store.state.isUserLoggedIn"
          depressed small color="yellow darken-2"
          @click="navigateTo({name:'register'})">
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
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to homepage
      this.$router.push({
        name: 'root'
      })
    }
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

.search-control {
  border-left: 50px;
}

input[type=search] { 
	cursor: pointer;
	display: block; 
	width: 200px; 
  border-left: 100px;
  letter-spacing: 4px;            
}

*::-webkit-search-cancel-button {
    -webkit-appearance: searchfield-cancel-button;
}
</style>
