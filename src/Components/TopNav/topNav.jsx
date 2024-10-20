import React from 'react';

// CSS
import './topNav.css';

// Images
import logo from '../../Assets/Images/yasmin-logo.png'

// Components

function TopNav() {

    // States


    return (
        <div className='topnav-wrapper'>
            <div className='topnav-img-wrapper'>
                <img className='topnav-img' src={logo} />
            </div>

            <div className='topnav-content-wrapper'>
                <div className='topnav-content-inner-wrapper'>
                    <a href='#home' id='home' className='topnav-content-button'> בית </a>
                    <a className='topnav-content-button'> מי אני? </a>
                    <a className='topnav-content-button'> ביקורות </a>
                    <a className='topnav-content-button'> צור קשר </a>
                </div>
            </div>
        </div>
    );
}

export default TopNav;