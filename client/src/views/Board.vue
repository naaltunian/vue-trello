<template>
    <v-container fluid>
        <v-btn color="primary" @click="back">Back</v-btn>
        <h1 class="text-center">{{ board.name }}</h1>
        <create-List-Form :lists="board.lists" />
        <v-slide-y-transition mode="out-in">
            <v-row class="mt-5" v-if="board"  alignment="alignment" row wrap>
                <!-- <v-col no-gutters cols="12" xs="12" sm="12" md="3" lg="3" v-for="list in board.lists" :key="list._id" pa-2>
                    {{ list.name }}
                </v-col> -->
                <v-col class="border text-center">
                    <h3 class="mb-2">Backlog</h3>
                    <v-card v-for="list in backlog" :key="list._id" class="mb-4 elevation-4">
                        {{list.name}}
                    </v-card>
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
        board: {},
        // backlog: []
    }),
    components: {
        createListForm
    },
    async mounted() {
        const board = await api.getBoard(this.$route.params.id);
        this.board = board[0];
        console.log("THIS IS THE BOARD ", this.board)
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    },
    destroyed() {
        this.board = {},
        this.lists = []
    },
    computed: {
        backlog() {
            if (this.board.lists) {
                return this.board.lists.filter(list => list.status !== 'backlog');
            }
            return null;
        },
        inProgress() {
            if (this.board.lists) {
                return this.board.lists.filter(list => list.status !== 'in-progress');
            }
            return null;
        },
        done() {
            if (this.board.lists) {
                return this.board.lists.filter(list => list.status !== 'done');
            }
            return null;
        },
        archived() {
            if (this.board.lists) {
                return this.board.lists.filter(list => list.status !== 'archived');
            }
            return null;
        }
    }
}
</script>

<style>
.border {
    border: 1px solid black;
    height: 200px;
}
</style>