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
import { mapActions } from 'vuex';
export default {
  name: 'App',
  data: () => ({
    fixed: false
  }),
  mounted() {
    // TODO: refresh token instead
    if (localStorage.token) {
      this.loginAction();
      this.$router.push('/boards');
    }
  },
  methods: {
    ...mapActions(['loginAction'])
  }
};
</script>
