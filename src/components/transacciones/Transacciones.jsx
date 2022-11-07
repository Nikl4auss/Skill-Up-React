import React from 'react';
import './transacciones.css';

const Transacciones = () => {
    const data = [
        {
            id: 1,
            detail: 'Shopping',
            date: '20/10/2022',
            price: 85
        },
        {
            id: 2,
            detail: 'Ticket',
            date: '20/10/2022',
            price: 85
        },
        {
            id: 3,
            detail: 'Algo',
            date: '20/10/2022',
            price: 85
        }
    ];
    return (
        <div className='transcontainer'>
            {data.map((e) => {
                return (
                    <div className="transcard" key={e.id}>
                        <span className="detail">{e.detail}</span>
                        <span className="date">{e.date}</span>
                        <span className="price">${e.price}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default Transacciones;