"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[#4CAF50] hover:bg-[#2E7D32] text-white font-semibold rounded-lg transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
