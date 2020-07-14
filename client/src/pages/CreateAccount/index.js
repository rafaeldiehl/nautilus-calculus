import React from 'react';
import Helmet from 'react-helmet';
import Form from '../../components/Form/Form';

function CreateAccount() {
    return(
        <div>
            <Helmet title="Criar conta • Nautilus Calculus" />
            <Form />
        </div>
    );
}

export default CreateAccount;