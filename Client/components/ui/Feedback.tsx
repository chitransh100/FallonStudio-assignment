"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import axios from "axios";
import apiURL from "@/lib/config";

const Feedback = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        `${apiURL}/feedback`,
        {
          name: form.name,
          email: form.email,
          feedbackText: form.message,
        },
        {
          withCredentials: true,
        }
      );
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting feedback:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-6 lg:px-12">
      <motion.div
        className="w-full max-w-2xl lg:grid lg:grid-cols-2 lg:gap-6 bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-zinc-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="hidden lg:flex flex-col justify-center text-left px-4">
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-2">We value your thoughts</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Let us know how we’re doing. Your feedback helps us improve and grow!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 lg:px-2">
          <h1 className="text-2xl font-semibold text-center text-black dark:text-white lg:hidden">Feedback Form</h1>
          <Input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="text-base"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="text-base"
          />
          <Input
            name="message"
            placeholder="Your Feedback (type here)"
            value={form.message}
            onChange={handleChange}
            required
            className="h-24 text-base"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {submitted && (
            <p className="text-green-600 text-center font-medium">
              ✅ Feedback submitted!
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Feedback;
