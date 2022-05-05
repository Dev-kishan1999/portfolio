import React from "react";

// style
import './Footer.css'

// icons
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { BsInstagram,BsLinkedin } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Footer = ()=>{
    return (
        <div className="footer">
            <hr />
            <div className="content">
                <div className="copyright">
                    <AiOutlineCopyrightCircle />
                    <p style={{'marginLeft':'0.25rem'}}>2022</p>
                </div>
                
                 <div className="contact-me">
                    <a href="mailto:kishansavaliya1999@gmail.com">Contact me</a>
                </div>

                <div className="social-link">
                    <a href="https://www.instagram.com/_kishan_savaliya_99/?igshid=YmMyMTA2M2Y"><BsInstagram style={{'marginRight':'0.3rem'}}/></a>
                    <a href="https://www.linkedin.com/in/kishan-savaliya-609ab3159/"><BsLinkedin /></a>     
                </div>    
            </div>
        </div>
    )
}

export default Footer;