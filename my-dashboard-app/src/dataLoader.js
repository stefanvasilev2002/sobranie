// src/dataLoader.js
import Papa from 'papaparse';
import { useState, useEffect } from 'react';

export const useCSVData = (url) => {
    const [data, setData] = useState({});

    useEffect(() => {
        Papa.parse(url, {
            download: true,
            header: true,
            complete: (results) => {
                const groupedData = results.data.reduce((acc, row) => {
                    const { table, ...rowData } = row;
                    acc[table] = acc[table] || [];
                    acc[table].push(rowData);
                    return acc;
                }, {});
                setData(groupedData);
            },
        });
    }, [url]);

    return data;
};
