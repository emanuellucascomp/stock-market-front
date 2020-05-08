<template>
  <v-container>
    {{ stockSymbol }}
  </v-container>
</template>

<script>
  export default {
    data(){
        return {
          stockSymbol: ''
        }
    },
    created(){
      this.stockSymbol = this.$route.params.symbol
    }
  }
</script>