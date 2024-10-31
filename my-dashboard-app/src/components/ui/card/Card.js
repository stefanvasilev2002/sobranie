// src/components/ui/card/Card.js
import React from 'react';

export const Card = ({ children }) => (
    <div className="border rounded-lg shadow-md p-4 bg-white">
        {children}
    </div>
);

export const CardHeader = ({ children }) => (
    <div className="mb-2">
        {children}
    </div>
);

export const CardContent = ({ children }) => (
    <div className="mt-2">
        {children}
    </div>
);

export const CardTitle = ({ children }) => (
    <h2 className="text-lg font-semibold">{children}</h2>
);

export const CardDescription = ({ children }) => (
    <p className="text-gray-500">{children}</p>
);
