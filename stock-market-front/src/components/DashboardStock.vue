<template>
  <v-container>
    <v-text-field
      v-model="firststockName"
      :rules="stockNameRules"
      :counter="10"
      label="Enter a stock name to search"
      required
    ></v-text-field>
    <DashboardTable />
  </v-container>
</template>

<script>
  import DashboardTable from './DashboardTable'

  export default {
    name: 'DashboardStock',
    components: {
      DashboardTable
    },
    data(){
      return {
        firststockName: '',
        stockNameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
      }
    }
  }
</script>
