import dayjs from "dayjs";
import { useCallback } from "react";
const useDateHelpers = () => {
  const getDaysInMonth = useCallback(
    (year = dayjs().year(), month = dayjs().month()) => {
      const days: string[] = [];
      const daysInMonth = dayjs().daysInMonth();
      for (let i = 1; i <= daysInMonth; i++) {
        days.push(dayjs(`${year}-${month + 1}-${i}`).format("YYYY-MM-DD"));
      }
      return days;
    },
    []
  );
  return { getDaysInMonth };
};

export default useDateHelpers;
