import React, { useEffect, useState } from 'react';

// CSS
import './home.css';

// Components
import TopNav from '../../Components/TopNav/topNav';
import Landing from '../../Components/Landing/landing';

function Home() {

    // States


    return (
        <div className='home-wrapper'>
            <TopNav />
            <Landing />
        </div>
    );
}

export default Home;