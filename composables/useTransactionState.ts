import type { Ref } from "vue";

interface TransactionState {
  state: Ref<any>;
  refresh: () => Promise<void>;
}

export function useTransactionState(
  current: Date,
  previous: Date,
  userId: string
): {
  state: TransactionState;
  previousState: TransactionState;
  refresh: () => Promise<void>;
  refreshPrevious: () => Promise<void>;
} {
  const state = useFetchTransactions(current, userId);
  const previousState = useFetchTransactions(previous, userId);

  return {
    state,
    previousState,
    refresh: state.refresh,
    refreshPrevious: previousState.refresh,
  };
}
