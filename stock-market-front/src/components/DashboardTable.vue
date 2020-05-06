<template>
  <v-container>
    <v-list two-line subheader>
      <v-subheader>Listed stocks</v-subheader>
      <v-list-item @click="navigateTo">
        <v-list-item-content>
          <v-list-item-title>BA</v-list-item-title>
          <v-list-item-subtitle>The Boeing Company</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
  import router from '../router'
  export default {
    data(){
        return {

        }
    },
    methods: {
        navigateTo() {
            router.push('/detail')
        }
    }
  }
</script>
