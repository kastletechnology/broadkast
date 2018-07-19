<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan">
      <v-toobar-title> {{title}} </v-toobar-title>
    </v-toolbar>

    <div class="pl-4 pr-4 pt-2 pb-2">
       <slot name="hello">
        No slot content defined.
       </slot>
      <slot name="bye">
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      title: "hello world"
    }
  }
}
</script>

<style scoped>
</style>
