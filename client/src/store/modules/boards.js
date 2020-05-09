import api from '../../api/api';

const state = {
    boards: []
}

const getters = {
    boards: (state) => state.boards
}

const actions = {
    getBoards: ({ commit }) => {
        commit('getBoards');
    },
    getBoardAction: ({ commit }, id) => {
        commit('getBoard', id);
    },
    createBoardAction: ({ commit }, title) => {
        commit('createBoard', title);
    }
}

const mutations = {
    getBoards: async (state) => {
        const boards = await api.getBoards();
        state.boards = boards;
    },
    createBoard: async (state, name) => {
        const board = await api.createBoard(name);

        state.boards.push(board)
    },
    getBoard: async (state, id) => {
        const board = await api.getBoard(id);
        console.log(board)
        return board;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}