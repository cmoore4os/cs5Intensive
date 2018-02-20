import React, { Component } from 'react';
import './App.css';

// other components
// import T1Props from './components/t1Props';
// import Blanket from './components/t2Props';
// import T3State from './components/t3State';
import Comments from './components/t4Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <T1Props name="CS5" />
        <Blanket color="blue" />
        <T3State /> */}

        <Comments />
      </div>
    );
  }
}

export default App;
