"use client";
import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import { AdminView } from "@/components/ui/AdminView";
import Feedback from "@/components/ui/Feedback";


export default function FeedbackForm() {
  
  const [view, setView] = useState("form");
  
  

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white dark:bg-black">
      
      <Navbar currentView={view} setView={setView} />
      {view === "form" ? <Feedback /> : <AdminView />}

      <footer className="mt-8 text-sm text-center text-neutral-500 dark:text-neutral-400">
        Created by Chitransh Kumar | Submitted for Internship Assignment
      </footer>
    </main>
  );
}
