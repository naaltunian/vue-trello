const state = {
    isLoggedIn: false,
    username: null
}

const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
    username: (state) => state.username
}

const actions = {
    loginAction: ({ commit }, username) => {
        commit('login', username);
    }
}

const mutations = {
    login: (state, username) => {
        state.isLoggedIn = true;
        state.username = username;
    },
    logout: (state) => {
        state.isLoggedIn = false;
        state.username = null
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}