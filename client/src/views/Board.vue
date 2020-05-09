<template>
    <v-container fluid>
        <v-btn color="primary" @click="back">Back</v-btn>
        <create-List-Form :lists="board.lists" />
        <v-slide-y-transition mode="out-in">
            <v-row class="mt-5" v-if="board"  alignment="alignment" row wrap>
                <!-- <v-col no-gutters cols="12" xs="12" sm="12" md="3" lg="3" v-for="list in board.lists" :key="list._id" pa-2>
                    {{ list.name }}
                </v-col> -->
                <v-col class="border text-center">
                    <h3>Backlog</h3>
                </v-col>
                <v-col class="border text-center">
                    <h3>In-progress</h3>
                </v-col>
                <v-col class="border text-center">
                    <h3>Done</h3>
                </v-col>
                <v-col class="border text-center">
                    <h3>Archived</h3>
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
        board: {}
    }),
    components: {
        createListForm
    },
    async mounted() {
        const board = await api.getBoard(this.$route.params.id);
        this.board = board[0];
        console.log(this.board)
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    },
    destroyed() {
        this.board = {},
        this.lists = []
    }
}
</script>

<style>
.border {
    border: 1px solid black;
    height: 200px;
}
</style>