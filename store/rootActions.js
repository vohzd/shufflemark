import getters 				  						from "./rootGetters.js";
import state 				    						from "./rootState.js";

export default {
  // initial bootstrapping
  async nuxtServerInit({ dispatch }, { req }){

    // let's check if the user is logged in !
    await dispatch("checkToken", req.headers.cookie);
  }
};
