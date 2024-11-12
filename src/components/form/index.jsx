import { useState, useId } from 'react';
import './style.css';
import Button from '../button';
// import Modal from './Modal';

function Form({theme}) {
    const [username, setUsername] = useState('');
    const [usernameIsMissing, setUsernameIsMissing] = useState(false);

    const [email, setEmail] = useState('');
    const [emailIsMissing, setEmailIsMissing] = useState(false);
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);

    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmEmailIsMissing, setConfirmEmailIsMissing] = useState(false);
    const [confirmEmailIsInvalid, setConfirmEmailIsInvalid] = useState(false);
    
    const [formEmpty, setFormEmpty] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);
    
    const id = useId();
    

    // const handleFinalSubmit = () => {
    //     console.log("Form Submitted");
    //     setIsModalOpen(false); // Close the modal
    // };
    
    const emptyForm = (usernameIsMissing && emailIsMissing && confirmEmailIsMissing);

    function validateUsername(username) {
        setUsernameIsMissing(username.length === 0);
    }
    
    function validateEmail(email) {
        setEmailIsMissing(email.length === 0);
        setEmailIsInvalid(!email.match(/.+@.+/));
    }

    function validateConfirmEmail(confirmEmail) {
        setConfirmEmailIsMissing(confirmEmail.length === 0);
        setConfirmEmailIsInvalid(email !== confirmEmail);
    }

    function checkEmptyForm() {
        if (!usernameIsMissing && !emailIsMissing && !confirmEmailIsMissing) {
            setFormEmpty(false)
        }
    }

    return (
        <div>
            <form 
                className="register"
                onSubmit = {(e) => {
                    e.preventDefault();
                    validateUsername(username);
                    validateEmail(email);
                    validateConfirmEmail(confirmEmail);
                    checkEmptyForm();

                    if (!usernameIsMissing && !emailIsMissing && !emailIsInvalid &&
                        !confirmEmailIsMissing && !confirmEmailIsInvalid && !formEmpty) {
                        setFormSubmitted(true);
                    } else {
                        setFormSubmitted(false);
                    }
                }}
            >
                <span className='register__hint'>* = Required</span>
                <label className="contact-form__label" htmlFor={'${id}-username'}>Name*</label>   
                {usernameIsMissing && <span className='register__error register__error--username'>Username is required</span>}
                <input className="contact-form__input contact-form__input--name" id={'${id}-username'} value={username} onInput={(e) => {
                    setUsername(e.target.value);
                    validateUsername(e.target.value);
                }}/>

                <label className="contact-form__label" htmlFor={'${id}-email'}>Email*</label>   
                {emailIsMissing && <span className='register__error regiter__error--email'>Email is required</span>}
                {emailIsInvalid && !emailIsMissing && <span className='register__error register__error--email-invalid'>Email is invalid</span>}
                <input className="contact-form__input contact-form__input--email" id={'${id}-email'} value={email} onInput={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                    }}/>

                <label className="contact-form__label" htmlFor={'${id}-confirm-email'}>Confirm Email</label>   
                {confirmEmailIsMissing && <span className='register__error register__error--confirmEmail'>Confirm Email is required</span>}
                {confirmEmailIsInvalid && !confirmEmailIsMissing && <span className='register__error register__error--confirmEmail-invalid'>Email must match</span>}
                <input className="contact-form__input contact-form__input--confirmEmail" id={'${id}-confirm-email'} value={confirmEmail} onInput={(e) => {
                    setConfirmEmail(e.target.value);
                    validateConfirmEmail(e.target.value);
                    }}/>

                <label className="contact-form__label" htmlFor={'${id}-message'}>Your suggestion:</label>  
                <textarea className="contact-form__input contact-form__input--suggestion" id={'${id}-message'}/>

                {/* <button type='submit'>Register</button> */}
                {/* <Modal  showModal={isModalOpen} setShowModal={setIsModalOpen} className="modal__submit">
                    <p>Are you sure you want to submit the form?</p>
                    <Button className="submit__button" type="submit" onClick={handleFinalSubmit} visual="button">Confirm</Button>
                </Modal> */}
                <Button type='submit' visual='link' theme={theme}>Submit</Button>
                
                {formSubmitted && <p className='form-submitted-message'>Form Submitted!!!</p>}
     
            </form>
        </div>
    );
}

export default Form;