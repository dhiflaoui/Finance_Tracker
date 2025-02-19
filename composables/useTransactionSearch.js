export function useTransactionSearch() {
  const isSearchOpen = ref(false);
  const searchQuery = ref("");

  const toggleSearch = () => {
    isSearchOpen.value = !isSearchOpen.value;
    if (!isSearchOpen.value) {
      clearSearch();
    }
  };

  const closeSearch = () => {
    isSearchOpen.value = false;
    clearSearch();
  };

  const clearSearch = () => {
    searchQuery.value = "";
  };

  return {
    isSearchOpen,
    searchQuery,
    toggleSearch,
    closeSearch,
    clearSearch,
  };
}
