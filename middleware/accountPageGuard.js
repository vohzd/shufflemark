// used if the user trys to visit /account and they're an admin
// saves having to switch the route desitination in teh components
export default ({store, redirect}) => {
  if (store.getters.user){
  }

  return redirect("/account/check")



};
