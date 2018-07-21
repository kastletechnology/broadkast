<template>
 <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          slot="action"
          class="cyan accent-2"
          light
          small
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
        </v-btn>

        <div
          v-for="song in songs"
          :key="song.id">
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
</style>
