import {
  startOfYear,
  endOfYear,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  sub,
} from "date-fns";
export const useSelectedTimePeriod = (period) => {
  const current = computed(() => {
    switch (period.value) {
      case "Yearly":
        return {
          from: startOfYear(new Date()),
          to: endOfYear(new Date()),
        };
      case "Monthly":
        return {
          from: startOfMonth(new Date()),
          to: endOfMonth(new Date()),
        };
      case "Weekly":
        return {
          from: startOfWeek(new Date()),
          to: endOfWeek(new Date()),
        };
      case "Daily":
        return {
          from: startOfDay(new Date()),
          to: endOfDay(new Date()),
        };
    }
  });
  const previous = computed(() => {
    switch (period.value) {
      case "Yearly":
        const lastYear = sub(new Date(), { years: 1 });

        return {
          from: startOfYear(lastYear),
          to: endOfYear(lastYear),
        };
      case "Monthly":
        const lastMonth = sub(new Date(), { months: 1 });
        return {
          from: startOfMonth(lastMonth),
          to: endOfMonth(lastMonth),
        };

      case "Weekly":
        const lastWeek = sub(new Date(), { weeks: 1 });
        return {
          from: startOfWeek(lastWeek),
          to: endOfWeek(lastWeek),
        };
      case "Daily":
        const yesterday = sub(new Date(), { days: 1 });
        return {
          from: startOfDay(yesterday),
          to: endOfDay(yesterday),
        };
    }
  });
  return {
    current,
    previous,
  };
};
