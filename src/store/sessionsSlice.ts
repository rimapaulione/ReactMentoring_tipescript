import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

type SessionsState = {
  sessions: Session[];
};
const initialState: SessionsState = {
  sessions: [],
};

export const sessionsSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {
    bookSession(
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        summary: string;
        description: string;
        date: string;
        image: string;
        duration: number;
      }>
    ) {
      if (state.sessions.some((session) => session.id === action.payload.id)) {
        state.sessions;
      } else {
        state.sessions.push(action.payload);
      }
    },
    cancelSession(state, action: PayloadAction<string>) {
      state.sessions = state.sessions.filter(
        (session) => session.id !== action.payload
      );
    },
  },
});

export const { bookSession, cancelSession } = sessionsSlice.actions;
