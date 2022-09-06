import './App.css';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div>
      <nav className="navbar bg-dark d-flex flex-row justify-content-center">
        <button className='btn btn-primary mx-2'>Button 1</button>
        <button className='btn btn-primary mx-2'>Button 2</button>
        <button className='btn btn-primary mx-2'>Button 3</button>
        {/* <div className="container-fluid bg-light">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
        </div> */}
      </nav>
      <Chat/>
    </div>
  );
}

export default App;
