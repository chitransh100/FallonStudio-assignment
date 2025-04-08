"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { setFeedbacks } from "@/redux/slices/feedbackSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { List } from "./list" // Adjust path if needed
import apiURL from "@/lib/config";

export const AdminView = () => {
  const dispatch = useAppDispatch();
  const { feedbacks } = useAppSelector((state) => state.feedback);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get(
          `${apiURL}/admin`,
          { withCredentials: true }
        );
        dispatch(setFeedbacks(res.data.data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchFeedback();
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Feedback Dashboard</h1>
      {feedbacks.length === 0 ? (
        <p className="text-sm opacity-60">No feedbacks yet.</p>
      ) : (
        <List feedbacks={feedbacks} />
      )}
    </div>
  );
};
