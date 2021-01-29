/* determines if returning users should be redirected to the dashboard instead of login screen */
export default ({store, redirect}) => {
  if (store.getters.user){
    return redirect("/account/dashboard")
  }
  else {
    if (process.client){
      window.location = `${store.getters.authServerEndpoint}?redirectUrl=https://localhost:1440/account/dashboard`;
    }
  }
};
