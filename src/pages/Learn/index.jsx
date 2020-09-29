import React from 'react';
import { Helmet } from 'react-helmet';

import Quiz from '../../components/Quiz';

function Learn() {
  return (
    <div id="learn-page">
      <Helmet>
        <title>Nautilus Calculus • Primeiro aprendizado</title>
      </Helmet>
      <Quiz />
    </div>
  );
}

export default Learn;
