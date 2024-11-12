import './style.css';

import Card from '../card/';

function MainArea({setPage, theme}) {

    return (
    <div className="home">

        <div className="skiptomaincontent">
                <a id="skiptomaincontent" href="#cards">Skip to content</a>
        </div>
        {/* <h1 className={`header__title--${theme}`}></h1> */}

        <h2 className={`home__h2--${theme}`}>Welcome to Webb Desi Farms!</h2>
        <p className={`home__intro--${theme}`}>
            Explore the beauty of country life at Webb Desi Farms. Connect with nature, 
            see our wonderful animals, and discover our best avacados!
        </p>
        <div className="home__features">
            <h3>What We Offer:</h3>
            <ul className="home__list">
                <li id="cards" className="home__cards">
                    <Card 
                        className="card"
                        title="Animals"
                        pic="https://images.unsplash.com/photo-1594731884638-8197c3102d1d?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Animals"
                        text="Meet our animals including cows, dogs, and goats. Perfect for a family day out!"
                        linkText="Learn More"
                        setPage={setPage}
                        pageName="Animal"
                    />
                </li>
                <li className="home__cards">
                    <Card 
                        className="card"
                        title="Farm Shop"
                        pic="https://images.unsplash.com/photo-1616485828923-2640a1ee48b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Farm Shop"
                        text="Fresh, organic avacados available for purchase. Don't miss our weekly specials!"
                        linkText="Shop Now"
                        setPage={setPage}
                        pageName="Shop"
                    />
                </li>
                <li className="home__cards">
                    <Card 
                        className="card"
                        title="Tour"
                        pic="https://images.unsplash.com/photo-1585499193151-0f50d54c4e1c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Tour"
                        text="Join our guided farm tours to experience the daily life on a farm firsthand."
                        linkText="Book a Tour"
                        setPage={setPage}
                        pageName="Tour"
                    />
                </li>
            </ul>
        </div>
        <div className="home__info">
            <h3 >Visit Us:</h3>
            <p className="home__info--text">Open daily from 8:00 AM to 6:00 PM</p>
        </div>
    </div>
    );
}

export default MainArea;