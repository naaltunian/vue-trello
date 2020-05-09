<template>
    <v-container fluid>
        <create-List-Form />
        <v-slide-y-transition mode="out-in">
            <v-row v-if="boards" row align-center wrap>
                <v-col no-gutters cols="12" xs="12" sm="12" md="3" lg="4" v-for="list in lists.lists" :key="list._id" pa-2>
                    {{ list.name }}
                </v-col>
            </v-row>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
import createListForm from '../components/CreateListForm';
import { mapActions } from 'vuex';

export default {
    name: 'board',
    data: () => ({
        board: {},
        lists: []
    }),
    components: {
        createListForm
    },
    mounted() {
        const board = this.getBoardAction(this.$route.params.id)
        this.board = board;
    },
    methods: {
      ...mapActions(['getBoardAction'])
    }
}
</script>