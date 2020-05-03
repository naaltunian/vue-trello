const state = {
    isLoggedIn: false,
}

const getters = {
    isLoggedIn: (state) => state.isLoggedIn
}

const actions = {
    loginAction: ({ commit }) => {
        commit('login');
    },
    logoutAction: ({ commit }) => {
        commit('logout');
    }
}

const mutations = {
    login: (state) => {
        state.isLoggedIn = true;
    },
    logout: (state) => {
        localStorage.removeItem('token');
        state.isLoggedIn = false;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}