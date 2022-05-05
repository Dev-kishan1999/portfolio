import React from 'react';

// styles
import './Card.css'

// assets
import profile from '../../assets/photo.jpg'

const Card = ()=>{
    return (
        <>    
            <div className="card">
                <img src={profile} alt="Avatar" className='profile' />
                <div className="container">
                    <h4><b>John Doe</b></h4> 
                    <p>Engineer</p> 
                </div>
            </div>
            {/* <div className="back"></div> */}
        </>
        
    )
}


export default Card;