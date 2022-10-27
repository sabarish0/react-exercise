import './App.css';
import './Style.css';
import FunctionalCount from './button.js'
import img1 from './Images/phto.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img1} height="650px" width="700px" alt="Img"/>
        <br/>
        <FunctionalCount />
        <br/>
      </header>
    </div>
  );
}

export default App; 