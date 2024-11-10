export const useCurrency = (amount) => {
  const user = useSupabaseUser();
  const currency = computed(() => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: user.value.user_metadata.currency ?? "EUR",
    }).format(isRef(amount) ? amount.value : amount);
  });

  return {
    currency,
  };
};
