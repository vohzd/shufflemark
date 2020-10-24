import state 												from "./state.js";

export default {
  async createWebsite({ commit, dispatch }, payload){
    console.log("called");
    try {
      const { data } = await this.$axios.post(`/api/website`, {
        url: payload.url
      });
      console.log(data);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async getWebsites({ commit, dispatch }){
    try {
      const { data } = await this.$axios.get("/api/websites");
      console.log(data);
      commit("SET_WEBSITES", data);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
}
