import React, { useEffect, useState } from 'react';

import '../common-styles/card.css';
import { getAllReceivers } from '../api.js'

function Receiver() {

    const [receivers, setReceivers] = useState([]);

    useEffect(() => {
        let mounted = true;
        getAllReceivers()
            .then(items => {
                if (mounted) {
                    setReceivers(items)
                }
            })
        return () => mounted = false;
    }, [])

    return (
        <div>
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

export default Receiver;
