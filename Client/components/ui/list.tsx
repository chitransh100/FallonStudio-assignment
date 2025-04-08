"use client";
import React from "react";
import { motion } from "framer-motion";

type Feedback = {
  name: string;
  email: string;
  feedbackText: string;
};

type ListProps = {
  feedbacks: Feedback[];
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const List: React.FC<ListProps> = ({ feedbacks }) => {
  return (
    <div className="max-w-3xl mx-auto my-10 px-6 py-8 bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        💬 User Feedback
      </h2>

      <motion.ul
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
        {feedbacks.map((feedback, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={itemVariants}
            className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl border border-gray-200 dark:border-neutral-700 hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-base font-semibold text-gray-800 dark:text-gray-100">
                  {feedback.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {feedback.email}
                </p>
              </div>
              {/* <div className="flex gap-2">
                <button
                  className="btn btn-sm btn-ghost"
                  title="Play"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M6 3L20 12 6 21 6 3z" />
                    </g>
                  </svg>
                </button>
                <button
                  className="btn btn-sm btn-ghost"
                  title="Like"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </g>
                  </svg>
                </button>
              </div> */}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {feedback.feedbackText}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
