import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning fixed-top">
                <a className="navbar-brand">GloBuild</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link">โปรดักและบริการ <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">ประโยชน์ที่คุณได้</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">ร่วมเป็นพาร์ทเนอร์</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;