export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  if (to.path === "/login" && user?.value) {
    return navigateTo("/");
  }

  return undefined;
});
