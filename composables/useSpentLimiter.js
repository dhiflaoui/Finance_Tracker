export const useSpentLimiter = (period, expenseValue, userData) => {
  const { limiterValue, limiterTimePeriod, limiterType } = userData;
  const spentLimiterOverallAlert = computed(() => {
    let result = false;
    if (limiterTimePeriod === period.value) {
      console.log("limiterTimePeriod: ", limiterTimePeriod);
      if (limiterType === "overall" && limiterValue !== 0) {
        result = expenseValue.value > limiterValue;
        spentLimiterAlertMessage.value = `Your spending of ${expenseValue.value} for the ${period.value} period has exceeded your set limit of ${limiterValue}. Please review your expenses.`;
      }
    }
    return result;
  });
  const spentLimiterAlertMessage = ref("");

  return {
    spentLimiterOverallAlert,
    spentLimiterAlertMessage,
  };
};
