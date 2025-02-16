export const useSpentLimiter = (
  period,
  expenseValue,
  userData,
  categoryChosen = ""
) => {
  const spentLimiterCategoryAlertMessage = ref("");
  const spentLimiterAlertMessage = ref("");
  const { limiterValue, limiterTimePeriod, limiterType, limiterCategories } =
    userData;
  const spentLimiterOverallAlert = computed(() => {
    let result = false;
    if (limiterTimePeriod === period.value) {
      if (limiterType === "overall" && limiterValue !== 0) {
        result = expenseValue.value > limiterValue;
        spentLimiterAlertMessage.value = `Your spending of ${expenseValue.value} for the ${period.value} period has exceeded your set limit of ${limiterValue}. Please review your expenses.`;
      }
    }
    return result;
  });
  const spentLimiterCategoryAlert = computed(() => {
    let result = false;
    if (limiterTimePeriod === period.value && limiterType === "category") {
      const category = limiterCategories.find(
        (cat) => cat.category === categoryChosen
      );
      if (category) {
        result = expenseValue.value > category.amount;
        spentLimiterCategoryAlertMessage.value = `Your spending of ${expenseValue.value} for the ${period.value} period has exceeded your set limit of ${category.amount}. Please review your expenses.`;
      }
    }
    return result;
  });

  return {
    spentLimiterOverallAlert,
    spentLimiterAlertMessage,
    spentLimiterCategoryAlert,
    spentLimiterCategoryAlertMessage,
  };
};
