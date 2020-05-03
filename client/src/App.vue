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
import api from './api/api';

import { mapActions } from 'vuex';
export default {
  name: 'App',
  data: () => ({
    fixed: false
  }),
  async mounted() {
    if (localStorage.token) {
      const valid = await api.checkIn();
      if (!valid) {
        this.logoutAction();
      } else {
        this.loginAction();
        this.$router.push('/boards');
      }

    }
  },
  methods: {
    ...mapActions(['loginAction', 'logoutAction'])
  }
};
</script>
