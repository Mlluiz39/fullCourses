import React from 'react';
import './Footer.css'

export default function Footer() {
  const textoDestaque = {
    textAlign: 'center',
    fontSize: '20px',
    color: '#fff',
  };
  return (
    <footer className='text-footer'>
      <h3 style={textoDestaque}>Fim da pagina</h3>
      <h2 className='texto-footer'>&copy;2021copyright
        <em style={{ color: '#000' }}> MlluizDevTech</em>
        </h2>
    </footer>
  );
}
