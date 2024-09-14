import React from "react";
import { Brain } from "lucide-react";
import { AuthButton } from "@/app/components";

export const Navbar: React.FC<{
  isLoggedIn: boolean;
  onAuthAction: () => void;
}> = ({ isLoggedIn, onAuthAction }) => (
  <nav className="bg-gradient-to-r from-blue-900 to-indigo-900 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Brain size={24} className="text-blue-300" />
        <span className="text-blue-100 text-xl font-bold tracking-wide">
          AI TASKMASTER
        </span>
      </div>
      <AuthButton isLoggedIn={isLoggedIn} onAuthAction={onAuthAction} />
    </div>
  </nav>
);
