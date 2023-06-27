import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState();

   useEffect( () =>{
    fetch(`https://car-testig.onrender.com/services/${serviceId}`)
    .then(res => res.json())
    .then(data => setService(data));
   }, [serviceId])
    return (
        <div>
            <h4>name of {service?.name}</h4>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;