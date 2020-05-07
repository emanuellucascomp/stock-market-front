<template>
  <v-container>
    <v-list two-line subheader>
      <v-subheader>Listed stocks</v-subheader>
      <v-list-item v-for="(stock, index) in stocks" :key="index" @click="navigateTo">
        <v-list-item-content>
          <v-list-item-title>{{stock["1. symbol"]}}</v-list-item-title>
          <v-list-item-subtitle>{{stock["2. name"]}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
  import router from '../router'
  export default {
    props:{
      stocks: {
        type: Array,
        default: () => []
      }
    },
    data(){
        return {

        }
    },
    methods: {
        navigateTo() {
            router.push('/detail')
        }
    },
  }
</script>
