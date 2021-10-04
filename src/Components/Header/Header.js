import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='d-flex justify-content-evenly align-items-center bg-primary m-2'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <Link className='text-decoration-none m-4 text-white' to='/home'>Home</Link>
                <Link className='text-decoration-none m-4 text-white' to='/about'>About</Link>
                <Link className='text-decoration-none m-4 text-white' to='/contact'>Contact</Link>
                <Link className='text-decoration-none m-4 text-white' to='/classes'>Classes</Link>
            </div>
        </div>
    );
};

export default Header;