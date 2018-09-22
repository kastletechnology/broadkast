<template>
<div>
  <v-navigation-drawer
    fixed
    :clipped="$vuetify.breakpoint.mdAndUp"
    app
    v-model="drawer"
  >
    <v-list dense>
      <template v-for="item in items">
        <v-layout
          row
          v-if="item.heading"
          align-center
          :key="item.heading"
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
        </v-layout>

        <v-list-group
          v-else-if="item.children"
          v-model="item.model"
          :key="item.text"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children" :key="i"
            @click=""
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else @click="" :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar
    color="blue darken-3"
    dark
    app
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    fixed
  >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down" @click="navigateTo({name: 'root'})">Broadkast</span>
    </v-toolbar-title>

    <v-text-field
      flat
      solo-inverted
      prepend-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>

    <v-spacer></v-spacer>
    <Search />
    <v-toolbar-items>
      <div v-if = "!$store.state.isUserLoggedIn">
        <Login />
      </div>

      <v-btn
        v-if = "!$store.state.isUserLoggedIn"
        depressed small 
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>

      <v-btn
        v-if = "$store.state.isUserLoggedIn"
        depressed small
        @click="logout">
        Log out
      </v-btn>

    </v-toolbar-items>    
  </v-toolbar>

  <!-- Content page -->
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-tooltip right>
          <v-btn
            icon
            large
            :href="source"
            target="_blank"
            slot="activator"
          >
            <v-icon large>code</v-icon>
          </v-btn>
          <span>Source</span>
        </v-tooltip>
      </v-layout>
    </v-container>
  </v-content>
</div>
  <!-- <v-toolbar fixed class="white selfbar">
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
      <v-btn
        depressed small color="yellow darken-2"
        :to="{
          name: 'create-form'
        }">
        Create
      </v-btn>
    </v-toolbar-items>

  </v-toolbar> -->
</template>

<script>
import Login from '@/components/Login'
import Search from '@/components/Songs/SongsSearchPanel'
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'contacts', text: 'Contacts' },
      { icon: 'history', text: 'Frequently viewed' },
      { icon: 'content_copy', text: 'Create' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Labels',
        model: true,
        children: [
          { icon: 'add', text: 'Create label' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' },
          { text: 'Undo changes' },
          { text: 'Other contacts' }
        ]
      },
      { icon: 'settings', text: 'Settings' },
      { icon: 'chat_bubble', text: 'Send feedback' },
      { icon: 'help', text: 'Help' },
    ]
  }),
  props: {
    source: String
  },
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
