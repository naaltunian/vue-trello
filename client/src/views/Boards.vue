<template>
  <v-container fluid>
    <create-Board-Form />
    <v-slide-y-transition mode="out-in">
      <v-row row align-center wrap>
        <!-- <create-Board-Form /> -->
        <v-progress-circular
          v-if="loading"
          :size="70"
          :width="7"
          indeterminate
          color="primary">
        </v-progress-circular>
        <v-col sm3 lg="4" v-for="board in boards" :key="board._id" pa-2>
          <p :board="board">{{ board.name }}</p>
        </v-col>
      </v-row>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import CreateBoardForm from '../components/CreateBoardForm';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "boards",
    components: {
        CreateBoardForm
    },
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