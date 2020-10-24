import state 												from "./state.js";

export default {
  async checkAuthState({ commit, dispatch }){
    try {
      let { data } = await this.$axios.post(`${this.getters.authServerEndpoint}/account/check-cookie`, {}, { withCredentials: true });
      commit("SET_USER", data);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async checkAccountExists({ commit, dispatch }, email){
    try {
      return await this.$axios.get(`${this.getters.authServerEndpoint}/account/${email}?property=chantry`);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async createAccount({ commit, dispatch }, payload){
    try {
      const { data } = await this.$axios.post(`${this.getters.authServerEndpoint}/account/?property=chantry`, {
        email: payload.email,
        password: payload.password
      });
      commit("SET_USER", data);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async login({ commit, dispatch }, payload){
    try {
      const { data } = await this.$axios.post(`${this.getters.authServerEndpoint}/account/login`, {
        email: payload.email,
        password: payload.password
      }, { withCredentials: true });
      commit("SET_USER", data);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async logout({ commit, dispatch }, needsRedirect){
    try {
      let { data } = await this.$axios.post(`${this.getters.authServerEndpoint}/account/logout`, {}, { withCredentials: true });
      commit("SET_USER", null);
      if (needsRedirect){ this.$router.push("/") }
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  }
}
