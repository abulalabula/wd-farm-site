import './style.css';

function Gallery({ animals, theme}) {
    return (
        <div className="gallery">
            {animals.map(animal => (
                <div key={animal.id} className="gallery__item">
                    <img src={animal.image} alt={animal.name} className="animal__image" />
                    <h3 className={`gallery__animal--${theme}`}>{animal.name}</h3>
                </div>
            ))}
        </div>
    );
}

export default Gallery;