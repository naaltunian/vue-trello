<template>
  <v-app>
    <v-app-bar app>
      <router-link style="text-decoration: none; color: inherit;" to="/">
        <v-toolbar-title>Trello</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <span v-if="!isLoggedIn">
        <v-btn :to="{ name: 'login'}">Go Login</v-btn>
        <v-btn :to="{ name: 'signup'}">Go Signup</v-btn>
      </span>
      <span v-if="isLoggedIn">
        <v-btn :to="{ name: 'boards'}">Boards</v-btn>
        <v-btn @click="logoutAction">Logout</v-btn>
      </span>
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
import { mapGetters, mapActions } from 'vuex';
import api from './api/api';

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
      }

    }
  },
  methods: {
    ...mapActions(['loginAction', 'logoutAction']),
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
};
</script>