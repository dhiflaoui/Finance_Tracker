import { u as useSupabaseClient } from './useSupabaseClient-S8I-hZ-A.mjs';
import { u as useSupabaseUser } from './server.mjs';
import { ref, watch } from 'vue';

const useAvatarUrl = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();
  const getPublicUrl = () => {
    var _a, _b, _c, _d;
    if (!((_b = (_a = user.value) == null ? void 0 : _a.user_metadata) == null ? void 0 : _b.avatar_url))
      return null;
    try {
      const { data } = supabase.storage.from("avatars").getPublicUrl((_d = (_c = user.value) == null ? void 0 : _c.user_metadata) == null ? void 0 : _d.avatar_url);
      return data.publicUrl;
    } catch (error) {
      console.error("error when getting avatars url", error.message);
    }
  };
  const avatarUrl = ref(getPublicUrl());
  watch(user, () => avatarUrl.value = getPublicUrl(), {
    immediate: true
  });
  return { avatarUrl };
};

export { useAvatarUrl as u };
//# sourceMappingURL=useAvatarUrl-BlMNqUT-.mjs.map
