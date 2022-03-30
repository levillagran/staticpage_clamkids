import './App.css';

import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";

function App() {
  /*
  <div className="card" style={{width: '18rem'}}>
      <img src='assets/demo/images/logoCLAM.png' className="App-logo" alt="logo" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  */
  return (
    <div className="App">
      <header className="App-header">
        <img src='assets/demo/images/logoCLAM.png' className="App-logo" alt="logo" />
        <div className='flex'><BsInstagram /> Instagram</div>
        <div className='flex'><BsFacebook /> Facebook</div>
        <div className='flex'><BsYoutube /> YouTube</div>
      </header>
    </div>

  );
}

export default App;
