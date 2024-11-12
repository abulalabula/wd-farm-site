import { useState } from 'react';
import './style.css';

function Tour({theme}) {
    const tours = [
        { id: 1, date: "Available Year Round", event: "Avocado Tree Tour", location: "Orchard Zone" },
        { id: 2, date: "October Special", event: "Pumpkin Carving", location: "Pumpkin Patch" },
        { id: 3, date: "Dec 29, 2023", event: "Milk Experience", location: "Dairy Area" },
    ];

    return (
        <div className="tour-page">
            <h1 className={`tour-title--${theme}`}>Current Tours</h1>
            <div className="tour-list">
                {tours.map(tour => (
                    <div key={tour.id} className="tour-card">
                        <div className="tour-date">{tour.date}</div>
                        <div className="tour-details">
                            <h2>{tour.event}</h2>
                            <p>{tour.location}</p>
                        </div>
                        <button className="tour-button">Book Not Available</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tour;