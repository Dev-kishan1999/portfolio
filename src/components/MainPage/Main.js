import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

// styles
import './Main.css';
// icons
import { BiBullseye } from 'react-icons/bi';

//assets
import Photo from '../../assets/photo-4.jpg'



const Main = ()=>{

    const [readMore,setReadMore] = useState(false)

    return (
        <>
            <div className="main-wrapper">
                <div className="title">
                        <h1 className='heading-h1'><span className='web'>W</span><span className='web'>e</span><span className='web'>b</span></h1>
                        <h2 className='heading-h2'><span className='web'>d</span><span className='web'>e</span><span className='web'>v</span>
                        <span className='web'>e</span><span className='web'>l</span><span className='web'>o</span><span className='web'>p</span>
                        <span className='web'>e</span><span className='web'>r</span><span className='web'>,</span>
                        <span className='web'>.</span><span className='web'>.</span><span className='web'>.</span></h2>
                    </div>
                    {/* <div className="img-title">
                        <div className="img">
                            <img src={Photo} />
                        </div>
                    </div> */}
                    <div className="intro">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus saepe sed doloribus necessitatibus animi, minima veniam ex tenetur molestias cumque?
                            <br></br><br></br><Link to="/about" className='read-more'>Read More</Link>
                        </p>
                    </div> 
            </div>
                
            <div className="projects">
                <div className="project-heading">
                    <BiBullseye style={{'fontSize':'1.5rem','marginRight':'1rem'}} className='icon' /> 
                    <h2>Projects</h2>
                </div>
                
                <hr/>
                <div className="project-container">
                    <div className="image">
                        <img src={Photo} className='project-image' />
                    </div>
                    <div className="project-detail">
                        <h1 className='project-title'>CodeAnalyzer</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam libero minus vero quam molestiae minima nobis ad corrupti dignissimos? Doloremque illum aperiam alias? Quia reiciendis adipisci, dolorum fugiat a possimus.</p>
                    </div>
                </div>
                
                
            </div>
        </>      
    )
}

export default Main;