"use client";

import { useState, useEffect } from 'react';

export default function Search() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault();
                setIsOpen(true);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleClose = () => setIsOpen(false);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
                <div className="relative">
                    <input
                        className="w-full px-4 py-2 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Search..."
                        readOnly
                    />
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs bg-blue-100 text-blue-600 border border-blue-300 rounded">
                        Ctrl+K
                    </span>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-blue-900 font-bold">Search</h2>
                            <button onClick={handleClose} className="text-gray-900 hover:text-blue-700">
                                <img className='rounded-md' src="/close.png" alt="closet" width={30} />
                            </button>
                        </div>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Type to search..."
                            autoFocus
                        />
                        {/* Aquí puedes añadir los resultados de la búsqueda */}
                    </div>
                </div>
            )}
        </>
    );
}