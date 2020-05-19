import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header"></header>
      <h1> App Pokemon </h1>
      <Link to="/list">Ver Pokemon</Link>
    </div>
  );
}

export default Home;
