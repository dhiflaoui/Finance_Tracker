export const useRedirectIfAuth = (url = "/") => {
  const user = useSupabaseUser();
  watch(
    user,
    (user) => {
      console.log("user: ", user);
      if (user) {
        navigateTo(url);
      }
    },
    { immediate: true }
  );
  return { user };
};
