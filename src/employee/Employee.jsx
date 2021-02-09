import React, { useEffect, useState } from 'react';

import { getAllEmployees } from '../api.js'

function Employee() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        let mounted = true;
        getAllEmployees()
            .then(items => {
                if (mounted) {
                    setEmployees(items)
                }
            })
        return () => mounted = false;
    }, [])

    return (
        <div>
            <ul>
                {employees.map(item =>

                    <div class="card">
                        <div class="container">
                            <li key={item.item}>{item.document.dateCreated}</li>
                            <li key={item.item}>{item.document.validFrom}</li>
                            <li key={item.item}>{item.document.validTo}</li>
                            <li key={item.item}>{item.materialTyoe}</li>
                            <li key={item.item}>{item.quantity}</li>
                            <li key={item.item}>{item.measurementUnit}</li>
                        </div>
                    </div>

                )}
            </ul>
        </div>
    );
}

export default Employee;