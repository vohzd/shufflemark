import state 												from "./state.js";

export default {
  async checkAuthState({ commit, dispatch }){
    try {
      let { data } = await this.$axios.post(`${this.getters.authServerEndpoint}/api/account/check-cookie`, {}, { withCredentials: true });
      commit("SET_USER", data);
    }
    catch (e){
      console.log("YOU ARE HERE");
      console.log(e);
      //dispatch("setNotification", e.response.data.reason);
    }
  },
  async checkAccountExists({ commit, dispatch }, email){
    try {
      return await this.$axios.get(`${this.getters.authServerEndpoint}/api/account?email=${email}&property=epitrade`);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async createAccount({ commit, dispatch }, payload){
    try {
      const { data } = await this.$axios.post(`${this.getters.authServerEndpoint}/api/account/?property=epitrade`, {
        email: payload.email,
        password: payload.password
      });
      commit("SET_USER", data);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async deleteAccount({ commit, dispatch }){
    try {
      const { data } = await this.$axios.post(`${this.getters.authServerEndpoint}/api/account/delete?property=epitrade`, {}, { withCredentials: true });
      commit("SET_USER", null);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async login({ commit, dispatch }, payload){
    try {
      const { data } = await this.$axios.post(`${this.getters.authServerEndpoint}/api/account/login`, {
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
      let { data } = await this.$axios.post(`${this.getters.authServerEndpoint}/api/account/logout`, {}, { withCredentials: true });
      commit("SET_USER", null);
      if (needsRedirect){ this.$router.push("/") }
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  }
}
