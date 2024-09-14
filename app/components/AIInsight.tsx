import React from "react";

export const AIInsight = ({ icon, title, content }) => (
  <div className="bg-gray-800 rounded-lg p-6 border border-blue-500">
    <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-300">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    <div className="text-blue-100">{content}</div>
  </div>
);
