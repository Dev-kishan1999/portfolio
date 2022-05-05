import React from 'react';
import { Link } from 'react-router-dom'

// style
import './NavBar.css'

// icons
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const NavBar = ()=>{

    const slider = ()=>{
        const navLinks = document.querySelectorAll('.nav-links li');
        document.querySelector('.nav-links').classList.toggle('nav-active');

        // animation
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 5 + 1}s`
            }
            
        })
    }

    return (
        // <header className='header'>
        //     <div className='content'>
        //         <div className="logo">
        //             <h2>Nav</h2>
        //         </div>
                
        //         <nav>
        //             <ul className='nav-link'>
        //                 <li>
        //                     <a href='#'>PageOne,</a>
        //                 </li>
        //                 <li>
        //                     <a href='#'>PageTwo,</a>
        //                 </li>
        //                 <li>
        //                     <a href='#'>PageThree</a>
        //                 </li>
        //             </ul>
        //             <div className='toggle'>
        //                 <BiMenuAltRight />
        //             </div>
        //         </nav>
                
        //     </div>
        // </header>
        <div className="header">
            <nav>
                <div className="logo">
                    <h4><Link to='/' style={{'textDecoration':'none','color':'#222'}}>kishan</Link></h4>
                </div>
                <ul className='nav-links'>
                    {/* <li><a href='/work'>Work,</a></li>
                    <li><a href='/about'>About,</a></li>
                    <li><a href='/pagethree'>Contact</a></li>  */}
                    <li><Link to='/work'>Work,</Link></li>
                    <li><Link to='/about'>About,</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <div className="toggle" onClick={slider} >
                    <BiMenuAltRight />
                </div>
            </nav>
        </div>
        
    )
}

export default NavBar;