import Vue from "vue";
import Vuex from "vuex";
import { load } from "../services/getAllData";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [],
    loading: false,
    error: null,
  },
  mutations: {
    setUserData(state, userData) {
      state.users = userData;
      state.loading = false;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    fetchUsers({ commit }) {
      commit("setLoading", true);
      load()
        .then((response) => {
          commit("setUserData", response);
          commit("setError", null);
        })
        .catch((e) => {
          console.log(e);
          commit("setLoading", false);
          commit("setError", e);
        });
    },
  },
  modules: {},
});

/*export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});*/
