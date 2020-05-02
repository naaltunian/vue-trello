<template>
  <v-app>
    <v-app-bar app>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    fixed: false
  }),
};
</script>
