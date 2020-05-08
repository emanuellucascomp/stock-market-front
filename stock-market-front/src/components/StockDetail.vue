<template>
  <v-container>
    {{ stock["Meta Data"]["2. Symbol"] }}
  </v-container>
</template>

<script>
  import { getStock } from '../service/service'

  export default {
    data(){
        return {
          stockSymbol: '',
          stock: {},
        }
    },
    methods: {
      getStock(){
        getStock(this.stockSymbol).then(stock => this.stock = stock)
      }
    },
    created(){
      this.stockSymbol = this.$route.params.symbol
      this.getStock()
    }
  }
</script>