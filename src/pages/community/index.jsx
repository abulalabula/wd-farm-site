import './style.css';

function Community() {
    return (
        <div className="community__page">
            <div className="community__row">
                <h2 className="community__name">Green Valley park</h2>
                <img className="community__image" src="https://images.unsplash.com/photo-1565716300385-7ef7f2262237?q=80&w=2141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Green Valley" />
                <p className="community__description">Green Valley is known for its lush landscapes and eco-friendly practices, making it a haven for nature lovers.</p>
            </div>
            <div className="community__row">
                <h2 className="community__name">Sunny Meadows farm</h2>
                <img className="community__image" src="https://images.unsplash.com/photo-1679480554968-b76deb287584?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sunny Meadows farm" />
                <p className="community__description">Sunny Meadows offers a vibrant lifestyle with colorful gardens and active community events.</p>
            </div>
            <div className="community__row">
                <h2 className="community__name">Blue Horizon coast</h2>
                <img className="community__image" src="https://images.unsplash.com/photo-1663971331601-3e92cf0af984?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blue Horizon" />
                <p className="community__description">Blue Horizon boasts breathtaking ocean views and a serene atmosphere, perfect for relaxation.</p>
            </div>
        </div>
    );
}

export default Community;