import { useState } from 'react';
import './style.css';

import Gallery from '../../components/gallery';

function Animal({theme}) {

    const animals = [
        { id: 1, name: "Holstein Friesian", type: "Cow", image: "https://images.unsplash.com/photo-1679282385387-87e00cc7e71f?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 2, name: "Angus", type: "Cow", image: "https://images.unsplash.com/reserve/tv3te4tNQsugPmYU4Aj7_KS_CattleFence.jpg?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 3, name: "Jersey", type: "Cow", image: "https://images.unsplash.com/photo-1590703690900-5bf7b981057e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 4, name: "Labrador Retriever", type: "Dog", image: "https://images.unsplash.com/photo-1691366094350-7ee1e822e48a?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 5, name: "German Shepherd", type: "Dog", image: "https://images.unsplash.com/photo-1619980263701-ff2df2e12423?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 6, name: "Golden Retriever", type: "Dog", image: "https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 7, name: "Beagle", type: "Dog", image: "https://images.unsplash.com/photo-1572566830488-069bcc7fbcec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 8, name: "Nubian", type: "Goat", image: "https://images.unsplash.com/photo-1532633378163-24c2c0da3c99?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 9, name: "Boer", type: "Goat", image: "https://images.unsplash.com/photo-1587622627361-14b33dcdff6f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 10, name: "Domestic Cat", type: "Other", image: "https://images.unsplash.com/photo-1596913398794-ce081d931d11?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 11, name: "Horse", type: "Other", image: "https://images.unsplash.com/photo-1547581849-38ba650ad0de?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 12, name: "Rabbit", type: "Other", image: "https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ];

    const [filterType, setFilterType] = useState('All');

    const filteredAnimals = animals.filter(animal => 
        filterType === 'All' || animal.type === filterType);
    return (
        <div>
            <select className="animal__filter" onChange={(e) => setFilterType(e.target.value)}>
                <option value="All">All</option>
                <option value="Cow">Cows</option>
                <option value="Dog">Dogs</option>
                <option value="Goat">Goats</option>
                <option value="Other">Others</option>
            </select>

            <Gallery animals={filteredAnimals} theme={theme}/>
        </div>
    );
}
export default Animal;