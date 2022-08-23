import React, { useEffect, useState } from 'react';

import './css/Nav.css';

function Nav() {
    const [show, handleShow] = useState(false); 

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false);
            console.log("Page loaded");
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);
    
  return (
    <div className={`nav ${show && "navBlack"}`}>
        <img className='navLogo' src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt = "Netflix Logo"/>
        <img className='navAvatar' src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt = ""/>
        <div className='navFadeBottom'/>
    </div>
  )
}

export default Nav