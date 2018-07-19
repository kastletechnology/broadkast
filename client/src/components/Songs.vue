<template>
 <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel>
        <div slot="hello">
          <h3> YOYOYOYO </h3>
          <p>
            Hello there I am a paragraph tag
          </p>
        </div>
        <div slot="bye">
          <h3> BYEBYEBYE </h3>
          <p>
            bye  
          </p>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
