"use client";

import { Loader2 } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  loading?: boolean;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  onClick,
  loading = false,
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  const baseStyles =
    "w-full py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-neutral-light text-neutral-dark hover:bg-neutral-light/80",
  };

  return (
    <button
      type={type}
      disabled={loading}
      className={`${baseStyles} ${variants[variant]} ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
      onClick={onClick}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin mr-2" />
        </>
      ) : (
        children
      )}
    </button>
  );
};
