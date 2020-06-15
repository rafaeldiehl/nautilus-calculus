import React from 'react';
import Helmet from 'react-helmet';
import Header from '../../components/Header';

function Home() {
    return(
        <div>
            <Helmet title="Nautilus Calculus • Aprenda Matemática de forma fácil!" />
            <Header />
        </div>
    )
};

export default Home;