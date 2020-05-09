<template>
    <v-container fluid>
        <div>{{ board.name }}</div>
        <create-List-Form />
        <v-slide-y-transition mode="out-in">
            <v-row v-if="board" row align-center wrap>
                <v-col no-gutters cols="12" xs="12" sm="12" md="3" lg="4" v-for="list in lists.lists" :key="list._id" pa-2>
                    {{ list.name }}
                </v-col>
            </v-row>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
import createListForm from '../components/CreateListForm';
import api from '../api/api';

export default {
    name: 'board',
    data: () => ({
        board: {},
        lists: []
    }),
    components: {
        createListForm
    },
    async mounted() {
        const board = await api.getBoard(this.$route.params.id);
        this.board = board[0];
    }
}
</script>