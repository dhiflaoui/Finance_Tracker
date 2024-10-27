const useAvatarUrl = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();
  const getPublicUrl = () => {
    if (!user.value?.user_metadata?.avatar_url) return null;
    try {
      const { data } = supabase.storage
        .from("avatars")
        .getPublicUrl(user.value?.user_metadata?.avatar_url);
      return data.publicUrl;
    } catch (error) {
      console.error("error when getting avatars url", error.message);
    }
  };
  const avatarUrl = ref(getPublicUrl());
  watch(user, () => (avatarUrl.value = getPublicUrl()), {
    immediate: true,
  });
  return { avatarUrl };
};
export default useAvatarUrl;
