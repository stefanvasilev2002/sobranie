// src/pages/MembersPage.js
import React from 'react';
import { useCSVData } from '../dataLoader';
import DataTable from '../components/DataTable';

const MembersPage = () => {
    const data = useCSVData('/sobranie_data.csv').pratenici || [];

    const columns = [
        { Header: 'Име', accessor: 'ime' },
        { Header: 'Презиме', accessor: 'prezime' },
        { Header: 'Датум на раѓање', accessor: 'datum_na_raganje' },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-red-700">Пратеници</h1>
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default MembersPage;
