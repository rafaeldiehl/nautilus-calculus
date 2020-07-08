import React from 'react';
import Helmet from 'react-helmet';
import ProgressBar from '../../../../components/ProgressBar';
import Question from '../../../../components/Question';

function GreaterLessEqual() {
    return(
        <div>
            <Helmet title="Maior, menor ou igual? • Nautilus Calculus" />
            <ProgressBar />
            <Question />
        </div>
    )
};

export default GreaterLessEqual;