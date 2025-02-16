import { ref, computed } from "vue";

export const createLimitAlert = (currentValue, limitValue, period, type) => {
  return {
    isExceeded: currentValue > limitValue,
    message: `Your spending of ${currentValue} for the ${period} period has exceeded your set limit of ${limitValue}. Please review your ${type}.`,
  };
};

export const useSpentLimiter = (
  period,
  expenseValue,
  userData,
  categoryChosen = ""
) => {
  const alertMessages = {
    category: ref(""),
    overall: ref(""),
  };

  // Early return if no user data is provided
  if (!userData) {
    return {
      categoryAlert: computed(() => false),
      overallAlert: computed(() => false),
      categoryAlertMessage: alertMessages.category,
      overallAlertMessage: alertMessages.overall,
    };
  }

  const { limiterValue, limiterTimePeriod, limiterType, limiterCategories } =
    userData;

  // Check if the period matches the user's settings
  const isPeriodMatching = computed(() => limiterTimePeriod === period.value);

  // Handle overall spending limit
  const overallAlert = computed(() => {
    if (!isPeriodMatching.value || limiterType !== "overall" || !limiterValue) {
      return false;
    }

    const { isExceeded, message } = createLimitAlert(
      expenseValue.value,
      limiterValue,
      period.value,
      "expenses"
    );

    if (isExceeded) {
      alertMessages.overall.value = message;
    }

    return isExceeded;
  });

  // Handle category-specific spending limit
  const categoryAlert = computed(() => {
    if (
      !isPeriodMatching.value ||
      limiterType !== "category" ||
      !categoryChosen ||
      !limiterCategories?.length
    ) {
      return false;
    }

    const categoryLimit = limiterCategories.find(
      (cat) => cat.category === categoryChosen
    );

    if (!categoryLimit) {
      return false;
    }

    const { isExceeded, message } = createLimitAlert(
      expenseValue.value,
      categoryLimit.amount,
      period.value,
      "category expenses"
    );

    if (isExceeded) {
      alertMessages.category.value = message;
    }

    return isExceeded;
  });

  return {
    categoryAlert,
    overallAlert,
    categoryAlertMessage: alertMessages.category,
    overallAlertMessage: alertMessages.overall,
  };
};
