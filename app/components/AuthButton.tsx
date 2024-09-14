import React from "react";
import { LogOut, User } from "lucide-react";

export const AuthButton: React.FC<{
  isLoggedIn: boolean;
  onAuthAction: () => void;
}> = ({ isLoggedIn, onAuthAction }) => (
  <button
    onClick={onAuthAction}
    className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-700 text-blue-100 px-4 py-2 rounded-full transition-all"
  >
    {isLoggedIn ? (
      <>
        <LogOut size={18} />
        <span>Logout</span>
      </>
    ) : (
      <>
        <User size={18} />
        <span>Sign In</span>
      </>
    )}
  </button>
);
