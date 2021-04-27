export const UserModule = {
    namespaced: true,
    state: {
        user: null,
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload
        },
    },
    actions: {
        setUser({commit}, user) {
            commit('SET_USER', user)
        },
    },
}
