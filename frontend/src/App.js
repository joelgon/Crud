import React from 'react';
import Menu from './component/Menu/Menu.jsx'
import Routes from './component/Routes/Routes.jsx'

import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
    <div className="container">
      <Menu />
      <Routes/>
    </div>
  );
}

export default App;
