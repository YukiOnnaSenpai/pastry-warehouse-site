
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { getReceiversBySupplier } from '../api.js'

import '../common-styles/card.css';

function ReceiversBySupplier() {
    const { supplierId } = useParams();
    const [receivers, setReceivers] = useState([]);


    useEffect(() => {
        let mounted = true;
        getReceiversBySupplier(supplierId)
            .then(items => {
                setReceivers(items);
            })
        return () => mounted = false;
    }, [])

    return (
        <div>
            <div>
            <button>Add</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
            <ul>
                {receivers.map(item =>

                    <div className="container">

                        <div className="card">
                            Date created: <li>{item.document.dateCreated}</li><br/>
                            Valid from: <li>{item.document.validFrom}</li><br/>
                            Valid to: <li>{item.document.validTo}</li><br/>
                            Material type: <li>{item.materialType}</li><br/>
                            Quantity: <li>{item.quantity}</li><br/>
                            Measurement unit: <li>{item.measurementUnit}</li><br/>
                            Price per unit: <li>{item.pricePerUnit}</li>

                        </div>
                    </div>

                )}
            </ul>
        </div>
    );
}

export default ReceiversBySupplier;
