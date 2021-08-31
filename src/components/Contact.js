import React from 'react';
import { useHistory } from 'react-router';

const Contact = () => {
    const history = useHistory();
    return (
        <div>
            <h1 style={{color:"green"}}>This is CONTACT Page</h1>
            <button onClick={() => history.push("/about")}>Go To Home</button>
        </div>
    )
}

export default Contact
