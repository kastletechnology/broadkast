<template>
  <div style="padding-left: 10px;">
    <form role="search">
      <div class="search-control">
        <i class="fas fa-search" />
        <input type="search" v-model="search" name="q"
              placeholder="Search the site..."
              @keyup.enter="Search"
        />
      </div>
    </form>
  </div>
    <!-- <v-text-field
      label="Search by song title, artist, album and genre."
      v-model="search"
    ></v-text-field> -->
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
  // methods: {
  //   async Search () {
  //     const route = {
  //       name: 'songs'
  //     }

  //     if (this.search !== '') {
  //       route.query = {
  //         search: this.search
  //       }
  //     }
  //     this.$router.push(route)
  //   }
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }

      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      // immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style>

</style>
