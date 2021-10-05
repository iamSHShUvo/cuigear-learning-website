import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [service,setService] = useState([])

    useEffect( () => {
        fetch('./courses.JSON')
        .then(res => res.json())
        .then(data => setService(data))
    },[]);
    
    return (
        <section className="sptb bg-white">
        <div className="container">
            <div className="row pt-5">
                {
                    service.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
       
        </div>
    </section>
    );
};

export default Services;