import React, { Component, useState } from 'react';
import About from './components/about';
import contact from './components/contact';
import Nav from './components/nav';
import portfolio from './components/portfolio';

function App (){
    
    return(
    <div>
        <div>
        <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
        </div>
        <main>
            <About></About>
        </main>
    </div>
    );
}
export default App