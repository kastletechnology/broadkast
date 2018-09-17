<template>
<div class="container">
  <v-layout>
    <v-flex>
      <v-btn dark class="cyan"> New Form </v-btn>
      <panel title="Song Metadata">
        <h4 class="card-title" style="float:left"> Add new form (index: )</h4>
        <span style="cursor:pointer; float:right;">
          X
        </span>

        <div ckass="employee-form">
          <v-text-field
            label="name"
            required
            :rules="[required]"
            v-model="employees.name"
          ></v-text-field>

          <v-text-field
            label="job"
            required
            :rules="[required]"
            v-model="employees.artist"
          ></v-text-field>

          <v-text-field
            label="about"
            required
            :rules="[required]"
            v-model="employees.about"
          ></v-text-field>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
  data () {
    return {
      // Song with null data at the beginning
      employees: {
        name: null,
        job: null,
        about: null
      },
      error: null,
      // Make sure the value is defined
      required: (value) => !!value || 'Required.'
    }
  }
}
</script>

<style scoped>
</style>
