export default function ({ $axios, store }) {
  $axios.onError(e => {
    console.log("RECEIVED AN AXIOS ERROR HERE!!!!!!");
    //console.log(e);
    console.log(e.response);
    let reason = "Something went wrong";
    if (e.response.status === 400){
      reason = e.response.data.reason ? e.response.data.reason : "Bad Request. Make sure all forms are filled out properly.";
    }
    if (e.response.status === 409){
      reason = e.response.data.reason ? e.response.data.reason : "Duplicate Record. Please use something else/unique";
    }
    else if (e.response.status === 500){
      reason = e.response.data.reason ? e.response.data.reason : "Looks like the server is down... shit.";
    }

    store.dispatch("setNotification", reason );

  })
}
