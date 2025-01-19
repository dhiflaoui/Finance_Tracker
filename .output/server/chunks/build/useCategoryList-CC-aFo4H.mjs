import { c as categories } from './constants-BX1jF9zp.mjs';
import { b as useSupabaseUser } from './server.mjs';
import { computed } from 'vue';

const useCategoryList = () => {
  const user = useSupabaseUser();
  const categoryList = computed(() => {
    var _a2;
    var _a, _b;
    return (_a2 = (_b = (_a = user.value) == null ? void 0 : _a.user_metadata) == null ? void 0 : _b.categories) != null ? _a2 : [...categories];
  });
  return {
    categoryList
  };
};

export { useCategoryList as u };
//# sourceMappingURL=useCategoryList-CC-aFo4H.mjs.map
