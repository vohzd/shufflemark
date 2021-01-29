export default async ({store, redirect}) => {
  await store.dispatch("checkAuthState");
};
