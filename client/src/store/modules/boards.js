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
    }
}

const mutations = {
    getBoards: async (state) => {
        const boards = await api.getBoards();
        state.boards = boards;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}