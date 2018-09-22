<template>
  <div class="searchbar">
    <v-text-field
      flat
      solo-inverted
      prepend-icon="search"
      label="Search"
      class="hidden-sm-and-down"
      v-model="search"
      @keyup.enter="Search"
    ></v-text-field>
  </div>

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
/* input[type=search] {
  cursor: pointer;
  display: block;
  width: 600px;
  border-left: 100px;
  letter-spacing: 4px;
} */
.searchbar {
  width: 400px;
}
</style>
