import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Button(props) {
  return (
    <button type="button" className="btn">
      <Link to={props.link}>
        {props.name}
      </Link>
    </button>
  );
}

export default Button;
