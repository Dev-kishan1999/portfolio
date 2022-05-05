import React from "react";

// styles
import './Contact.css';

// emailjs
//import emailjs from 'emailjs-com';
// vpucXGspElUhPmkwAec1w
const Contact = ()=>{

    // function sendEmail(e) {
    //     e.preventDefault();
       
    // }


    return (
        <div className="contact-wrapper">
            <div className="contact-title">
                <h1>Contact me</h1>
            </div>
            <div className="contact-content">
                <form onSubmit={()=>{
                    window.location = 'mailto:kishansavaliya1999@gmail.com'
                }}>
                    <label for='name'>Name : </label>
                    <input type='text' id='name' placeholder='Your name' />
                    <small className='error' />

                    <label for='email'>Email : </label>
                    <input type='text' id='email' name='to' placeholder='Your email' />
                    <small className='error' /> 

                    <input type='hidden' name='apiKey' value='vpucXGspElUhPmkwAec1w' />
                    <input type='hidden' name='subject' value='From portfolio' />


                    <label for='message'>Message : </label>
                    <textarea id='message' placeholder='Your message' name='html' rows={6}/>
                    <small className='error' />

                    <div className="center">
                        <input type='submit' value='Send message' />
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Contact;