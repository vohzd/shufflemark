import state 												from "./state.js";

export default {
  async addWebsite({ commit, dispatch }, url){
    console.log("action: addWebsite");
    await this.$axios.post(`/api/website`, url)
    console.log("DONE");
/*
    try {
      console.log("FINISHED");
      console.log(data);
    }
    catch (e){
      console.log(e);
      //dispatch("setNotification", e.response.data.reason);
    }*/
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
  async deleteWebsite({ commit, dispatch }, id){
    try {
      const { data } = await this.$axios.delete(`/api/website/${id}`);
      console.log(data);
      commit("GET_WEBSITES");
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
}
