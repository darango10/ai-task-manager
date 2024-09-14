import React from "react";
import { X } from "lucide-react";

export const TaskItem = ({ task, onComplete, onDelete, onEdit }) => (
  <div
    className="bg-gray-800 rounded-lg p-4 flex items-center justify-between transition-all hover:bg-blue-700 cursor-pointer"
    onClick={() => onEdit(task)}
  >
    <div className="flex items-center space-x-4">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={(e) => {
          e.stopPropagation();
          onComplete(task.id);
        }}
        className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400"
      />
      <span
        className={`text-lg ${
          task.completed ? "line-through text-gray-400" : "text-blue-100"
        }`}
      >
        {task.title}
      </span>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-400">{task.dueDate}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
        className="text-gray-400 hover:text-red-400"
      >
        <X size={20} />
      </button>
    </div>
  </div>
);
