import React, { useState, useEffect } from 'react';


const Clock = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <h1 className='ge'>Relógio da Geisila</h1>
            <h1 className='msg'>Dia e hora exatos</h1>
            <div className="date"> {dateTime.toLocaleDateString()}</div>
            <div className="time"> {dateTime.toLocaleTimeString()}</div>
            
        </div>
    );
};

export default Clock;


