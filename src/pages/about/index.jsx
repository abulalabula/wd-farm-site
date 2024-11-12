import { useState } from 'react';
import './style.css';

import Button from '../../components/button';
import HamburgerMenu from '../../components/hamburger-menu';

function About({ setPage, theme }) {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        console.log('Subscribe button clicked, nice!');
        setIsSubscribed(true);
    };

      return (
        <div className={`about--${theme}`}>
            <HamburgerMenu setPage={setPage} theme={theme}/>
            <h1 className="about__title">About Us</h1>   
            <p className="about__intro">Welcome to Webb Desi Farms. Here you can learn about our history, the farm owner, and our connection with the local community.</p>
            
            <div className="subscription__area">
                <h2 className={`subscription__title--${theme}`}> Join the adventure! Subscribe to our newsletter and get exclusive access to our latest stories and offers. </h2>
                <Button
                    type="button"
                    visual="subscribe"
                    onClick={handleSubscribe}
                    disabled={isSubscribed}
                    theme={theme}
                >
                    {isSubscribed ? 'Thank you!' : 'Subscribe'}
                </Button>
               
            </div>
        </div>
      );
    }
    
    export default About;