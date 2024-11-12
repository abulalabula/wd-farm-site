import { useState } from 'react';
import './style.css';

function History({theme}) {
    const years = [1960, 1995, 2023];
    const [yearIndex, setYearIndex] = useState(0);

    const handleYearChange = (change) => {
        setYearIndex(prevIndex => (prevIndex + change + years.length) % years.length);
    };

    const year = years[yearIndex];

    return (
        <div className="history">
            <h1 className={`history__title--${theme}`} >Our History</h1>

            <div className="year__selector">
                <button 
                    onClick={() => handleYearChange(-1)} 
                    disabled={year === 1960}
                >
                    &lt;
                </button>
                <span>{year}</span>
                <button 
                    onClick={() => handleYearChange(1)} 
                    disabled={year === 2023}
                >
                    &gt;
                </button>
            </div>

            {year === 1960 && (
                <div className="history__content">    
                    <img className="history__content-image" src="https://images.unsplash.com/photo-1532779817324-6b38196f4c59?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="1960s farm" />
                    <p>In 1960, Webb Desi Farms began its journey. The initial years were challenging, with efforts focused on acquiring the first batch of cows to produce milk and expand the farm's operations.</p>
                </div>
            )}

            {year === 1995 && (
                <div className="history__content">
                    <img className="history__content-image" src="https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="1995s farm" />
                    <p>By 1995, the farm had evolved significantly. It started welcoming visitors and opened an in-farm store. Avocados became the feature product during this period, helping to build strong connections with local agricultural communities and shops.</p>
                </div>
            )}

            {year === 2023 && (
                <div className="history__content">
                    <img className="history__content-image" src="https://images.unsplash.com/photo-1601995163166-4151b2a7b89b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="2023 farm" />
                    <p>Entering 2023, Webb Desi Farms focused on technological transformation to enhance the quality of milk and fruits. The farm also introduced a wider variety of animals, attracting visitors from all over the country.</p>
                </div>
            )}
        </div>
    );
}

export default History;