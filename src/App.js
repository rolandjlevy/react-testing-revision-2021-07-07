import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GetHeightWrapper from './components/GetHeightWrapper';
import ParentWrapper from './components/GetHeightWrapper';
import ConditionalWrapper from './components/ConditionalWrapper';

const App = () => {

  const [toggleState, setToggle] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => setToggle(prevState => !prevState)}>Toggle Conditional Wrapper</button>

        <ConditionalWrapper
          condition={toggleState}
          wrapper={children => <div className="box">{children}</div>}
        >
          <h2>This is the child</h2>
        </ConditionalWrapper>


        <GetHeightWrapper>
          <button>clicker</button>
        </GetHeightWrapper>
        
        <ParentWrapper dataParentToChild='Hellow world' height='30'>
          Test
        </ParentWrapper>
        <p>
          Edit <code>src/App.js</code>!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
