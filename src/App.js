import React from 'react';
import Completed from './components/Completed';
import Inprogress from './components/Inprogress';
import Navbar from './components/Navbar';
import Open from './components/Open';

const App = () => {
  return (
    <div className='container mt-5 pt-5'>
      <Navbar />
      <div className='d-flex row justify-content-between mt-3'>
        <div className='col-md-4 '>
          <Open />
        </div>
        <div className='col-md-4 '>
          <Inprogress />
        </div>
        <div className='col-md-4 '>
          <Completed />
        </div>
      </div>
    </div>
  );
};

export default App;
