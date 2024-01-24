import './App.css';

import Canvas from './Components/Canvas'; 
import Toolbar from './Components/Toolbar';

function App() {
  return (
    <div className="App">
    
    <Toolbar width={100} height="100vh" />
      <div id="canvas-container" className="canvas-container">
        <Canvas width={700} height={500} />
      </div>
    </div>
  );
}

export default App;
