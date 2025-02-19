export function useTransactionState(current, previous, userId) {
  const state = useFetchTransactions(current, userId);
  const previousState = useFetchTransactions(previous, userId);

  return {
    state,
    previousState,
    refresh: state.refresh,
    refreshPrevious: previousState.refresh,
  };
}
