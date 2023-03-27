import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-light py-3 footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">© 2023 Todo App</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="https://www.instagram.com/khalwalesaviour/" target="_blank" rel="noopener noreferrer" className="me-3 text-decoration-none">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://twitter.com/Saviour18992992" target="_blank" rel="noopener noreferrer" className="me-3 text-decoration-none">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://web.facebook.com/saviour.khalwale.1" target="_blank" rel="noopener noreferrer" className="me-3 text-decoration-none">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://wa.me/0790844918" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;