<template>
  <panel title="Recently Viewed Songs">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks">
      <template slot="items" slot-scope="props">
        <!-- Two column -->
        <td class="text-xs-right">
          {{props.item.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Title', // Tag for the column
          value: 'title', // Name of the key that to reference from bookmarks data
          align: 'right'
        },
        {
          text: 'Artist',
          value: 'artist',
          align: 'right'
        }
      ],
      pagination: {
        sortBy: 'date',
        desecending: true
      },
      songs: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  // To find all the bookmarks of this user from the backend
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await SongHistoryService.index({
        userId: this.user.id
      })).data
    }
  }
}
</script>

<style scoped>
</style>
