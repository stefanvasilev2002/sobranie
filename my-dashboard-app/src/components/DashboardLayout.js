// src/components/DashboardLayout.js
import React from 'react';

const DashboardLayout = ({ children, onNavigate, currentPage }) => (
    <div className="flex h-screen bg-gray-100">
        <div className="w-64 bg-red-700 text-white shadow-lg">
            <div className="p-4 flex items-center">
                <h1 className="text-2xl font-bold">Собрание</h1>
            </div>
            <nav className="mt-4">
                <button onClick={() => onNavigate('members')}>Пратеници</button>
                <button onClick={() => onNavigate('assemblies')}>Парламентарни Состави</button>
                {/* Add more links as needed */}
            </nav>
        </div>
        <div className="flex-1 overflow-auto p-8">{children}</div>
    </div>
);

export default DashboardLayout;
