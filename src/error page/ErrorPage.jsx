import { NavLink } from 'react-router-dom';
import './style.css'
import { useEffect } from 'react';

const ErrorPage = () => {
  useEffect(() => {
    document.title = "404 "
}, [])
    return (
        <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <NavLink className='rounded-xl' to='/'>Homepage</NavLink>
        </div>
      </div>
      );
};

export default ErrorPage;