import React from 'react';
import { Link } from 'react-router-dom';

function ProgressBar() {
    return (
        <div className="progressBar">
            <Link to={"/learn"}>
                <i className="material-icons">close</i>
            </Link>
            <div className="bar">
                <div className="progress"></div>
            </div>
        </div>
    );
}

export default ProgressBar;