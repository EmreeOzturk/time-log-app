import { create } from "zustand";
type LogType = {
  note: string;
  hour: number;
  date: Date;
};
type LogState = {
  log: LogType;
  logs: { [key: string]: LogType };
  setLog: (log: LogType) => void;
  setDate: (date: Date) => void;
  setLogs: (log: LogType, key: string) => void;
};

export const useLogStore = create<LogState>()((set) => ({
  log: {
    note: "",
    hour: 0,
    date: new Date(),
  },
  logs: {},
  setLog: (log: LogType) =>
    set((state) => ({
      log: {
        ...state.log,
        ...log,
      },
    })),
  setDate: (date: Date) =>
    set((state) => ({
      log: {
        ...state.log,
        date,
      },
    })),
  setLogs: (log: LogType, key: string) =>
    set((state) => ({
      logs: {
        ...state.logs,
        [key]: log,
      },
    })),
}));
