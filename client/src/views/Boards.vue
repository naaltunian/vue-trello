<template>
  <v-container fluid>
    <create-Board-Form />
    <v-slide-y-transition mode="out-in">
      <v-row row align-center wrap>
        <v-progress-circular
          v-if="loading"
          :size="70"
          :width="7"
          indeterminate
          color="primary">
        </v-progress-circular>
        <v-col no-gutters cols="12" xs="12" sm="12" md="3" lg="4" v-for="board in boards" :key="board._id" pa-2>
          <board-Card :board="board" />
        </v-col>
      </v-row>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import CreateBoardForm from '../components/CreateBoardForm';
import BoardCard from '../components/BoardCard'
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "boards",
    components: {
        CreateBoardForm,
        BoardCard
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