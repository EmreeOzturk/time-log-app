import { create } from "zustand";
interface ILogState {
  note: string;
  hour: number;
  date: Date;
}
type LogState = {
  log: ILogState;
  logs: { [key: string]: ILogState };
  setLog: (log: ILogState) => void;
  setDate: (date: Date) => void;
  setLogs: (log: ILogState, key: string) => void;
};

export const useLogStore = create<LogState>()((set) => ({
  log: {
    note: "",
    hour: 0,
    date: new Date(),
  },
  logs: {},
  setLog: (log: ILogState) =>
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
  setLogs: (log: ILogState, key: string) =>
    set((state) => ({
      logs: {
        ...state.logs,
        [key]: log,
      },
    })),
}));
