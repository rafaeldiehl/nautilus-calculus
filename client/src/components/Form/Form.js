import React from 'react';
import Submit from './Submit'

function Form(props) {
    return(
        <form name="form" method="post" action={props.action}>
            <Submit value="Cadastrar" />
        </form>
    );
}

export default Form;