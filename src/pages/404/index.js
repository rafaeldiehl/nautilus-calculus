import React, { Component } from 'react';
import Helmet from 'react-helmet';

class PageNotFound extends Component {
    render() {
        return(
            <div>
                <Helmet title="Página não encontrada • Nautilus Calculus" />
            </div>
        );
    }
};

export default PageNotFound;