// redux/slices/feedbackSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feedback } from "./types";

interface FeedbackState {
  feedbacks: Feedback[];
}

const initialState: FeedbackState = {
  feedbacks: [],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setFeedbacks: (state, action: PayloadAction<Feedback[]>) => {
      state.feedbacks = action.payload;
    },
    
  },
});

export const { setFeedbacks } = feedbackSlice.actions;
export default feedbackSlice.reducer;
