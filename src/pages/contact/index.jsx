import { useState } from 'react';
import './style.css';
import Form from '../../components/form';
import Footer from '../../components/footer';

function Contact({theme}) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
    setShowModal(true);
    };
    
      return (
        <div className='contact'>
            <h1 className={`contact__title--${theme}`} >Contact us</h1>
            <Form theme={theme}/>
            <Footer/>
        </div>
      );
    }
    
    export default Contact;