import { useState } from 'react';
import './style.css'; 

const AccordionSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion__section">
            <button
                className="accordion__title"
                onClick={toggleOpen}
                aria-expanded={isOpen}
                aria-controls={`panel-${title.replace(/\s+/g, '-').toLowerCase()}`}
            >
                {title}
                <span className="accordion__icon">{isOpen ? '−' : '+'}</span>
            </button>
            <div
                className={`accordion__content ${isOpen ? 'open' : 'closed'}`}
                id={`panel-${title.replace(/\s+/g, '-').toLowerCase()}`}
            >
                {isOpen && children}
            </div>
        </div>
    );
};

export default AccordionSection;