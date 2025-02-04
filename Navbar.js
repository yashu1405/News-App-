import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              YB News
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" aria-current="page"  to="/">General</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page"  to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page"  to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page"  to="/entertainment">Entertainment</Link></li>  
                <li className="nav-item"><Link className="nav-link active" aria-current="page"  to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page"  to="/technology">Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
{/* <li className="nav-item"><Link className="nav-link active" aria-current="page"  to="/">General</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page"  to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page"  to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page"  to="/entertainment">Entertainment</Link></li>  
                <li className="nav-item"><Link className="nav-link active" aria-current="page"  to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page"  to="/technology">Technology</Link></li> */}

{/* <li className="nav-item"><a className="nav-link active" aria-current="page"  href="/">General</a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page"  href="/business">Business</a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page"  href="/health">Health</a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page"  href="/entertainment">Entertainment</a></li>  
                <li className="nav-item"><a className="nav-link active" aria-current="page"  href="/sports">Sports</a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page"  href="/technology">Technology</a></li> */}