import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <nav>

                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about" >About</Link>
                </li>

                <li>
                    <Link to="/login" >Login</Link>
                </li>



            </nav>
        )
    }
}

export default Header