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
    },
    logoutAction: ({ commit }) => {
        commit('logout');
    }
}

const mutations = {
    login: (state, username) => {
        state.isLoggedIn = true;
        state.username = username;
    },
    logout: (state) => {
        localStorage.removeItem('token');
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