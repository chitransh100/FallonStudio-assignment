import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from './slices/feedbackSlice';

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});

// ✅ Export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
