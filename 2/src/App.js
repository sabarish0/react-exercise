import img from './Images/phto.jpg';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>card view </h1>
        <div class="cards">
        <article class="card">
        <header>
            <h2>ABOUT PHOTOGRAPHY</h2>
        </header>    
        <center>
        <img src={img} alt="logo"/>
        </center>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><div class="content"><p>Photography is the art of capturing light with a camera,usually via a digital sensor or film, to create an image.
    With the right camera equipment, you can even photograph wavelengths of light invisible to the human eye, including
    UV, infrared, and radio.The first permanent photograph was captured in 1826 (some sources say 1827) by Joseph Nicéphore
    Niépce in France. It shows the roof of a building lit by the sun.</p>
            <footer>
            <a href="https://photographylife.com/what-is-photography"><button className='button'>To be continue</button></a>
        </footer>
        <br></br>
        </div>
            
    </article>           
   
</div>
            
</center>
<br></br>
<br></br>
      </header>
    </div>
  );
}
export default App;