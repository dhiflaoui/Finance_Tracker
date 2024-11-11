import { categories } from "~/constants";
export const useCategoryList = () => {
  const user = useSupabaseUser();

  const categoryList = computed(() => {
    return user.value?.user_metadata?.categories ?? [...categories];
  });

  return {
    categoryList,
  };
};
