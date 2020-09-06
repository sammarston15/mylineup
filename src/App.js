// Initial imports
import React from 'react';
import './reset.css';
import './App.scss';


// Components
import Header from './components/header/Header';
import Todos from './components/todos/Todos';
import Nav from './components/nav/Nav';



function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Todos />
    </div>
  );
}

export default App;
