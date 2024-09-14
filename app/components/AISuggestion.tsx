import React from "react";
import { Sparkles } from "lucide-react";

export const AISuggestion = ({ suggestion, onAccept, onReject }) => (
  <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between border border-yellow-500">
    <div className="flex items-center space-x-2">
      <Sparkles size={20} className="text-yellow-400" />
      <span className="text-blue-100">{suggestion}</span>
    </div>
    <div className="flex space-x-2">
      <button
        onClick={onAccept}
        className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500"
      >
        Accept
      </button>
      <button
        onClick={onReject}
        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500"
      >
        Reject
      </button>
    </div>
  </div>
);
