<template>
  <panel title="Songs">
  <!-- Redirect to song-create page when the add button is clicked -->
  <v-btn
      slot="action"
      @click="navigateTo({name: 'songs-create'})"
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
        class="song"
        :key="song.id">

      <v-layout>
        <v-flex xs6>
            <div class="song-title">
            {{song.title}}
            </div>
            <div class="song-artist">
            {{song.artist}}
            </div>
            <div class="song-genre">
            {{song.genre}}
            </div>

            <!-- Redirect to the corresponding song page when the view button is clicked -->
            <v-btn dark class="cyan"
            @click="navigateTo({
                name: 'song',
                params: {songId: song.id}})">
            View
            </v-btn>
        </v-flex>

        <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
  // the immediate in watch do exactly the same thing so we can just del it
  // async mounted () {
  //   // do a request to the backend for all the songs
  //   this.songs = (await SongsService.index()).data
  // }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size:18px;
}

.album-image {
  width: 60%;
  margin: 0 auto;
}

</style>
