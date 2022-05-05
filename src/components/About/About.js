import React from "react";

// styles
import './About.css'

// icons
import { VscDebugBreakpointFunction } from 'react-icons/vsc';

// assests
//import Photo from '../../assets/photo-5.jpg';
import Photo2 from '../../assets/photo-6.jpg';

const About = () =>{
    return (
        <div className="about-wrapper">
            <div className="about-title">
                <h1>about</h1>
            </div>
            <div className="about-content">
                <div className="about-image">
                    {/* <span><img src={Photo} /></span> */}
                    <img src={Photo2} alt=''/>
                </div>
                <div className="about-intro">
                    <div className="about-icon">
                        <VscDebugBreakpointFunction />
                    </div>
                    <div className="about-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident numquam nesciunt sint magnam voluptates dolore accusamus iusto. Nihil, excepturi. Natus dolore rem modi iure voluptas temporibus voluptatum enim labore sed.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default About;