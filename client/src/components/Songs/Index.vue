<template>
 <v-layout>
   <v-flex xs6>
     <songs-bookmarks class="mt-2" />
     <recently-viewed-songs class="mt-2" />
   </v-flex>
    <v-flex .col-md-6 .offset-md-3>
      <!-- <songs-search-panel /> -->
      <songs-panel class="mt-2 ml-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
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
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }
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
