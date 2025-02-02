"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthInputProps {
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  error?: string;
}

export const Input = ({
  label,
  type: initialType,
  placeholder,
  value,
  error,
}: AuthInputProps) => {
  const [type, setType] = useState(initialType);

  const togglePasswordVisibility = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-neutral-dark mb-1.5">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          className={`w-full px-4 py-2.5 rounded-lg border ${
            error ? "border-red-500" : "border-neutral-light"
          } focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200`}
          placeholder={placeholder}
          value={value}
        />
        {initialType === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral hover:text-neutral-dark transition-colors"
          >
            {type === "password" ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
