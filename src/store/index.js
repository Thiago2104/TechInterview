import Vue from "vue";
import Vuex from "vuex";
import { load } from "../services/getAllData";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [],
    loading: false,
  },
  mutations: {
    setUserData(state, userData) {
      state.users = userData;
      state.loading = false;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    fetchUsers({ commit }) {
      commit("setLoading", true);
      load()
        .then((response) => {
          commit("setUserData", response);
        })
        .catch((e) => {
          console.log(e);
          commit("setLoading", false);
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
