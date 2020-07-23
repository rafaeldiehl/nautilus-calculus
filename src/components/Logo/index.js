import React from 'react';
import PropTypes from 'prop-types';
import LogoLarge from '../../assets/logo_large.png';
import LogoMedium from '../../assets/logo_medium.png';
import LogoSmall from '../../assets/logo_small.png';

const Logo = (props) => {
  const { size } = props;
  if (size === 'medium') {
    return (
      <img
        src={LogoMedium}
        alt="Logo Nautilus Calculus Médio"
      />
    );
  } if (size === 'large') {
    return (
      <img
        src={LogoLarge}
        alt="Logo Nautilus Calculus Grande"
      />
    );
  }
  return (
    <img
      src={LogoSmall}
      alt="Logo Nautilus Calculus Pequeno"
    />
  );
};

Logo.propTypes = {
  size: PropTypes.string,
};

Logo.defaultProps = {
  size: 'small',
};

export default Logo;
