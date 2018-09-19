<template>
<div class="container">
  <v-layout>
    <v-flex>
      <v-btn dark class="cyan" @click="addNewEmployeeForm"> New Employee </v-btn>
      <v-btn dark class="cyan" @click="addNewWorksheet"> New Worksheet </v-btn>
      <panel class="ml-2 mt-2" v-for="(employee, index) in employees" :key="index" :title="employee.type">
        <h4 class="card-title" style="float:left"> Add new form (index: {{ index }})</h4>
        <span style="cursor:pointer; float:right;" @click="deleteEmployeeForm(index)">
          X
        </span>

        <div class="mb-3" v-if="employee.name!=null">
          <v-text-field
            label="name"
            required
            :rules="[required]"
            v-model="employee.name"
          ></v-text-field>

          <v-text-field
            label="job"
            required
            :rules="[required]"
            v-model="employee.job"
          ></v-text-field>

          <v-text-field
            label="about"
            required
            :rules="[required]"
            v-model="employee.about"
          ></v-text-field>
        </div>

        <div class="mb-3" v-if="employee.title!=null">
          <v-text-field
            label="title"
            required
            :rules="[required]"
            v-model="employee.title"
          ></v-text-field>

          <v-text-field
            label="content"
            required
            :rules="[required]"
            v-model="employee.content"
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
      employees: [
        // empty at the beginning
      ],
      error: null,
      // Make sure the value is defined
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    addNewEmployeeForm () {
      this.employees.push({
        type: 'Employee',
        name: '',
        job: '',
        about: ''
      })
    },
    deleteEmployeeForm (index) {
      this.employees.splice(index, 1)
    },
    addNewWorksheet () {
      this.employees.push({
        type: 'Worksheet',
        title: '',
        content: ''
      })
    }
  }
}
</script>

<style scoped>
</style>
