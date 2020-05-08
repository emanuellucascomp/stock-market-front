<template>
  <v-container>
    <v-text-field
      v-model="firststockName"
      :rules="stockNameRules"
      :counter="10"
      label="Enter a stock name to search and press ENTER"
      required
      @keyup.enter="searchStock"
    ></v-text-field>
    <DashboardTable :stocks="matches" @detail="navigate"/>
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
        matches: [],
        mainBrazilianStocks: [
          {
            "1. symbol": "IBOV11.SAO",
            "2. name": "IBOVESPA IBO"
          },
          {
            "1. symbol": "ABEV3.SAO",
            "2. name": "Ambev S.A."
          },
          {
            "1. symbol": "AZUL4.SAO",
            "2. name": "Azul S.A."
          },
          {
            "1. symbol": "BTOW3.SAO",
            "2. name": "B2W - Companhia Digital"
          },
          {
            "1. symbol": "B3SA3.SAO",
            "2. name": "B3 S.A. - Brasil, Bolsa, Balcao"
          },
          {
            "1. symbol": "BBAS3.SAO",
            "2. name": "Banco do Brasil S.A."
          },
          {
            "1. symbol": "BBSE3.SAO",
            "2. name": "BB Seguridade Participacoes S.A."
          },
          {
            "1. symbol": "BRML3.SAO",
            "2. name": "BR Malls Participacoes S.A."
          },
          {
            "1. symbol": "BBDC4.SAO",
            "2. name": "Banco Bradesco S.A."
          },
          {
            "1. symbol": "LIPR3.SAO",
            "2. name": "Eletrobras Participacoes S.A. - Eletropar"
          },
        ]
      }
    },
    methods: {
      searchStock(){
        searchStock(this.firststockName).then(stocks => {
            this.matches = stocks.bestMatches
        })
      },
      setMain(){
        this.matches = this.mainBrazilianStocks
      },
    },
    mounted(){
      this.setMain()
    }
  }
</script>
