<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Stock Market</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import DashboardStock from './components/DashboardStock';

export default {
  name: 'App',

  components: {
    DashboardStock,
  },

  data: () => ({
    //
  }),
};
</script>
