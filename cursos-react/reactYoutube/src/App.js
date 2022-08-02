import React from 'react';
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Relogio from './components/Relogio/Relogio';

export default function App() {
  return (
    <>
      <Relogio/>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
