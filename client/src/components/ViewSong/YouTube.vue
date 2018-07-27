<template>
  <panel title="Youtube Video">
    <youtube
    :video-id="youtubeId"
    :player-width="400"
    :player-height="243"
    >
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
