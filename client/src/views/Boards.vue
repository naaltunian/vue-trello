<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row align-center wrap>
        <v-progress-circular
          v-if="loading"
          :size="70"
          :width="7"
          indeterminate
          color="primary">
        </v-progress-circular>
        <!-- check div styling -->
        <div v-if="!loading" >
            <v-flex sm3 v-for="board in boards" :key="board._id" pa-2>
            <p :board="board">BOARD</p>
            </v-flex>
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "boards",
    data: () => ({
        loading: false
    }),
    methods: {
        ...mapActions(['getBoards'])
    },
    async mounted() {
        await this.getBoards();
    },
    computed: {
        ...mapGetters(['boards'])
    }
}
</script>