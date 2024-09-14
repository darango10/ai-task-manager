"use client";

import React, { useState } from "react";
import { Calendar, CheckCircle, PlusCircle, Zap } from "lucide-react";
import {
  AIInsight,
  AISuggestion,
  Navbar,
  TaskItem,
  TaskModal,
} from "@/app/components";

export function TaskManager() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finalize Q4 strategy",
      description: "Complete the Q4 strategy document",
      dueDate: "2024-09-20",
      completed: false,
    },
    {
      id: 2,
      title: "Review team OKRs",
      description: "Assess team OKRs for the quarter",
      dueDate: "2024-09-25",
      completed: true,
    },
    {
      id: 3,
      title: "Prepare board presentation",
      description: "Create slides for the upcoming board meeting",
      dueDate: "2024-09-30",
      completed: false,
    },
  ]);
  const [aiSuggestion, setAiSuggestion] = useState(
    "Break down 'Prepare board presentation' into smaller tasks"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleAuthAction = () => setIsLoggedIn(!isLoggedIn);

  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleCreateNew = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleSaveTask = (task) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, task]);
    }
    setIsModalOpen(false);
  };

  const handleAcceptSuggestion = () => {
    const newTask = {
      id: tasks.length + 1,
      title: "Outline board presentation structure",
      description: "Create a basic structure for the board presentation",
      dueDate: "2024-09-28",
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setAiSuggestion("Consider adding a task for rehearsing the presentation");
  };

  const handleRejectSuggestion = () => {
    setAiSuggestion(
      "Would you like me to suggest a time management technique for your current tasks?"
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-blue-100">
      <Navbar isLoggedIn={isLoggedIn} onAuthAction={handleAuthAction} />
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-300">
            AI-Powered Workspace
          </h1>
          <button
            onClick={handleCreateNew}
            className="bg-blue-600 text-blue-100 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors flex items-center space-x-2"
          >
            <PlusCircle size={20} />
            <span>New Task</span>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <AIInsight
              icon={<Zap size={24} className="text-yellow-400" />}
              title="AI Task Analysis"
              content={
                <div className="space-y-2">
                  <p>Optimization opportunities detected:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Group similar tasks: &quot;Finalize Q4 strategy&quot; and
                      &quot;Review team OKRs&quot;
                    </li>
                    <li>
                      Critical task alert: &quot;Prepare board
                      presentation&quot; requires immediate attention
                    </li>
                  </ul>
                </div>
              }
            />
            <AISuggestion
              suggestion={aiSuggestion}
              onAccept={handleAcceptSuggestion}
              onReject={handleRejectSuggestion}
            />
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onComplete={handleComplete}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
          <div className="space-y-6">
            <AIInsight
              icon={<Calendar size={24} className="text-blue-400" />}
              title="AI Schedule Optimization"
              content={
                <p>
                  Based on your work patterns and task urgency, here&apos;s your
                  optimized schedule:
                  <br />
                  1. 9 AM - 11 AM: Work on &quot;Prepare board
                  presentation&quot;
                  <br />
                  2. 1 PM - 3 PM: &quot;Finalize Q4 strategy&quot;
                  <br />
                  3. 4 PM - 5 PM: &quot;Review team OKRs&quot;
                </p>
              }
            />
            <AIInsight
              icon={<CheckCircle size={24} className="text-green-400" />}
              title="AI Productivity Insights"
              content={
                <div>
                  <p className="mb-2">Your productivity score: 85/100</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="mt-2">
                    Great job! You&apos;re 15% more productive than last week.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <TaskModal
        task={editingTask}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
      />
    </div>
  );
}
