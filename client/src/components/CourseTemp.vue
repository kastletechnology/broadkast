<template>
<v-layout>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-media
        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        height="100px"
        width="30px"
      ></v-card-media>

      <v-card-title primary-title>
        <div>
          <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange"><i class="fas fa-share"/></v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  data () {
    return {
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  }
}
</script>

<style scoped>
.card {
  width: 300px;
  padding: 50px 50px;
}
</style>
