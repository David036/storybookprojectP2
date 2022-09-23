import { useState } from 'react';
import './App.css';
import Indicator from './components/indicator';
import Input from './components/input';
import Modal from './components/modal';
import UsePagination from './components/pagination';

function App() {
  


  return (
    <div className="App">
      <UsePagination />
      <Input />
      <Modal />
      <Indicator />
    </div>
  );
}

export default App;
