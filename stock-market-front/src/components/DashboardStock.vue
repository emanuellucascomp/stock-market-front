<template>
  <v-container>
    <v-text-field
      v-model="firststockName"
      :rules="stockNameRules"
      :counter="10"
      label="Enter a stock name to search"
      required
      @keyup.enter="searchStock"
    ></v-text-field>
    <DashboardTable :stocks="matches"/>
  </v-container>
</template>

<script>
  import DashboardTable from './DashboardTable'
  import { searchStock } from '../service/service'

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
        matches: []
      }
    },
    methods: {
      searchStock(){
        searchStock(this.firststockName).then(stocks => {
            this.matches = stocks.bestMatches
        })
      }
    }
  }
</script>
