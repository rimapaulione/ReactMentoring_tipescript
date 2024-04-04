import { configureStore } from "@reduxjs/toolkit";
import { sessionsSlice } from "./sessionsSlice";

export const store = configureStore({
  reducer: {
    sessions: sessionsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
