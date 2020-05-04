import router from '../../router/index';

function boardRootState() {
    return {
        boards: []
    }
}

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
    logoutAction: ({ commit, rootState }) => {
        commit('logout', rootState);
    }
}

const mutations = {
    login: (state) => {
        state.isLoggedIn = true;
    },
    logout: (state, rootState) => {
        localStorage.removeItem('token');
        state.isLoggedIn = false;
        Object.assign(rootState.boards.boards, boardRootState());
        // rootState.boards.boards = [];
        window.location.reload(true);
        router.push('/');
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}