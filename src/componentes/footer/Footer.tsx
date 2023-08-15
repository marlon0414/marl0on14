import'./Footer.css'

import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
       

      <div className='footer-content'>
        <img src='https://ww1.freelogovectors.net/wp-content/uploads/2023/05/barbie-logo-01-freelogovectors.net_.png'></img>
        <div className='footer-section'>
          <h2>INÍCIO</h2>
          <ul>
            <li><a href="#">Home</a></li>
       
          </ul>
        </div>

        <div className='footer-section'>
          <h2>INFORMAÇÕES</h2>
          <ul>
            <li><a href="#">EMPRESA-BARBIECONPANY</a></li>
            <li><a href="#">Contato-(67)8890453</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h2>SUPORTE</h2>
          <ul>
            <li><a href="#">Email-barbie.com@gmail.com</a></li>
            <li><a href="#">Telefones(96799860135)</a></li>
            <li><a href="#">Chat</a></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h2>REDES SOCIAIS</h2>
          <ul className='social-icons'>
            <li><a href="#"><img src="whats.png" alt="WhatsApp" /></a></li>
            <li><a href="#"><img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-lighting-and-furniture-design-studio-aqua-creations-32.png" alt="Instagram" /></a></li>
            <li><a href="#"><img src="https://www.pngplay.com/wp-content/uploads/9/Facebook-No-Background.png" alt="Facebook" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
