import React from 'react'
import { Twitter, Facebook, Instagram, Youtube, Linkedin } from 'feather-icons-react';
import './Footer.scss'
const Footer = () => {
  return (
    <footer>
      <span>Todos los derechos reservados @2023 App News</span>
      <div className='container-icons'>
        <div className='container-icon'>
          <Twitter className='icon-footer' />
        </div>
        <div className='container-icon'>
          <Facebook className='icon-footer' />
        </div>
        <div className='container-icon'>
          <Instagram className='icon-footer' />
        </div>
        <div className='container-icon'>
          <Youtube className='icon-footer' />
        </div>
        <div className='container-icon'>
          <Linkedin className='icon-footer' />
        </div>
      </div>
    </footer>
  )
}

export default Footer