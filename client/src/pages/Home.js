import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

function Home (){
  return (
    <>
      <header>
        <Header/>
        <NavBar />
      </header>
      <main>
        <h1>Home!</h1>
      </main>
    </>
  );
};

export default Home;
