import { u as useSupabaseUser } from './server.mjs';
import { computed } from 'vue';

const transactionViewOptions = ["Yearly", "Monthly", "Weekly", "Daily"];
const categories = [
  "Food",
  "Housing",
  "Car",
  "Entertainment",
  "Personal staff"
];
const types = ["Income", "Expense", "Saving", "Investment"];
const currencyOptions = [
  "USD",
  "EUR",
  "GBP",
  "CAD",
  "AUD",
  "JPY",
  "TDN"
];
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

export { types as a, currencyOptions as c, transactionViewOptions as t, useCategoryList as u };
//# sourceMappingURL=useCategoryList-C9xO7939.mjs.map
