import React from 'react';
import {Link, useLocation} from "react-router-dom";

const HomePage = () => {
    const location = useLocation();
    return (
        <div>
            <div>
                <Link to={{pathname: '/login', state: {background: location}}}>Go to login as modal</Link>
            </div>
            <div>
                <Link to={{pathname: '/login'}}>Go to login as page</Link>
            </div>
        </div>
    )
};

export default HomePage;
