import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const[darkmode,setdarkmode]=useState('false')
  useEffect(() => {
    document.body.className = darkmode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkmode]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-primary  ${darkmode ? 'navbar-dark bg-dark' : 'navbar-light bg-dark'} fixed-top`}>
      <div className="container">
        <Link className="navbar-brand" to="/">TaskTrack</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/today">Today</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alltasks">All Tasks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/completed">Completed</Link>
            </li>
          </ul>
          <button className={`btn btn-sm ${darkmode ? 'btn-dark' : 'btn-light'}`} onClick={() => setdarkmode(!darkmode)}>
            {darkmode ? '☀ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;