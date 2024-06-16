import React from 'react';
import { COLOR } from '../constants';
const Footer = () => {
  return (
    <footer className="footer text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ color: COLOR }}>
            <hr className="my-4" />
            <p className="mb-1">
              Made with <span className="text-danger">♥</span> by Aryan Nair
            </p>
            <p className="mb-1">&copy; 2024 All rights reserved.</p> 
          
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
