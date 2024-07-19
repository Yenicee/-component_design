"use client";

import { useEffect, useState } from 'react';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '-0.3s' }}></div>
            <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '-0.5s' }}></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-green-500">¡Contenido cargado!</h1>
        </div>
      )}
    </>
  );
}
