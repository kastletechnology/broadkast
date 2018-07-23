<template>
    <v-layout column>
    </v-layout>
</template>

<script>
// import SongsService from '@/services/SongsService'
export default {
  // Grab the song from database
  async mounted () {
    // Get the songId from current URL
    const songId = this.$store.state.$route.params.songId
  }
}
</script>

<style scoped>
</style>
