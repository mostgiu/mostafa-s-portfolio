import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            Copyright &#169; {new Date().getFullYear()} Mostafa Saleh. All rights reserved.
        </footer>
    );
}

export default Footer
