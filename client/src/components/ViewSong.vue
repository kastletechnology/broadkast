<template>
    <v-layout column>
    </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: null
    }
  },
  // Grab the song from database
  async mounted () {
    // Get the songId from current URL
    const songId = this.$store.state.route.params.songId
    this.song = await SongsService.show(songId)
  }
}
</script>

<style scoped>
</style>
