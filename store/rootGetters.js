import state from "./rootState.js";

export default {
  authServerEndpoint: (state) => process.env.AUTH_SERVER_ENDPOINT
}
