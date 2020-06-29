import React from 'react';
import ExternalLink from 'components/ExternalLink';
import './styles.scss';
import logo from 'assets/images/newbweb-logo-512-white.png';

function App() {
  return (
    <div className="root">
      <header className="header"><img src={logo} alt="newBweb" className="logo" /></header>
      <main className="main">
        <h1>React Client Starter</h1>
        <p>This template was built to follow along with newBweb's "Serverless React for Newbies" course.</p>
        <p>
          Make sure you ran the following command after using Create React App,
          or you will be missing some dev dependencies!
        </p>
        <code className="code">
          node addDevDependencies.js
          <br />
          npm install
        </code>
      </main>
      <footer className="footer">
        Visit
        {' '}
        <ExternalLink href="https://newbweb.com">newBweb website</ExternalLink>
        {' '}
        for more info!
      </footer>
    </div>
  );
}

export default App;
