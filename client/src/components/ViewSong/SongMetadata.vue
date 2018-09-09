<template>
  <panel title="Song Metadata">
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

        <!-- Redirect to song-edit page when the edit button is clicked -->
        <v-btn dark class="cyan"
          :to="{
            name: 'song-edit',
            params () {
              return {
                songId: song.id
            }
            }
          }">
           <v-icon>edit</v-icon>&nbsp;Edit
        </v-btn>

        <!-- Unbookmark the song if the unbookmark button is clicked -->
        <v-btn v-if="isUserLoggedIn && bookmark"
          dark class="cyan" @click="unsetAsBookmark">
           <v-icon>bookmark_border</v-icon>&nbsp;Unbookmark
        </v-btn>

        <!-- Bookmark the song if the bookmark button is clicked -->
        <v-btn v-if="isUserLoggedIn && !bookmark"
          dark class="cyan" @click="setAsBookmark">
           <v-icon>bookmark</v-icon>&nbsp;Bookmark
        </v-btn>
      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  // To index the bookmark from database when the page is loaded
  async mounted () {
    console.log('mounted  here')
    if (!this.isUserLoggedIn) {
      return
    }

    try {
      const bookmarks = (await BookmarksService.index({
        songId: this.song.id
      })).data
      if (bookmarks.length) {
        this.bookmark = bookmarks[0]
      }
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
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
  width: 70%;
  margin: 0 auto;
}
</style>
