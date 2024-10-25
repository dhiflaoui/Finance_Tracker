export const useIsUserLoggedIn = (url = "/") => {
  const user = useSupabaseUser();
  watch(user, (user) => {
    if (user) {
      navigateTo(url);
    }
  });
  return { user };
};
