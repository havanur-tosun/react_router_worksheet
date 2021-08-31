// import React from 'react'
import { useLocation } from 'react-router';

const About = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <h1 style={{color:"red"}}>This is ABOUT Page</h1>
            <p>Current URL: {pathname}</p>
        </div>
    )
}

export default About


