<template>
  <v-container>
    <h1>{{ stock["Meta Data"]["2. Symbol"] }}</h1>
    <v-divider></v-divider>
    <v-expansion-panels :class="'contents'">
      <v-expansion-panel>
          <v-expansion-panel-header>Information</v-expansion-panel-header>
          <v-expansion-panel-content>{{ stock["Meta Data"]["1. Information"] }}</v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
          <v-expansion-panel-header>Last refreshed</v-expansion-panel-header>
          <v-expansion-panel-content>{{ stock["Meta Data"]["3. Last Refreshed"] }}</v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
          <v-expansion-panel-header>Time zone</v-expansion-panel-header>
          <v-expansion-panel-content>{{ stock["Meta Data"]["5. Time Zone"] }}</v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
          <v-expansion-panel-header>Values (of the last refreshed day)</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list-item>
              <v-list-item-content>Open: {{ values["1. open"] }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>High: {{ values["2. high"] }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>Low: {{ values["3. low"] }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>Close: {{ values["4. close"] }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>Volume: {{ values["5. volume"] }}</v-list-item-content>
            </v-list-item>            
          </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn color="primary" dark>Return to dashboards</v-btn>
  </v-container>
</template>

<script>
  import { getStock } from '../service/service'

  export default {
    data(){
        return {
          stockSymbol: '',
          stock: {},
          lastUpdated: '',
          values: {},
        }
    },
    methods: {
      async getStock(){
        getStock(this.stockSymbol).then(stock => {
          this.stock = stock
          this.lastUpdated = this.stock["Meta Data"]["3. Last Refreshed"]
          this.values = this.stock["Time Series (Daily)"][`${this.lastUpdated}`]
        })
      },
    },
    beforeMount(){
      this.stockSymbol = this.$route.params.symbol
      this.getStock()
    }
  }
</script>
<style scoped>
  .contents {
    padding: 15px 0 15px; 
  }
</style>