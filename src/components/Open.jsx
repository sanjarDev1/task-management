import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Pen } from '../assets/pen.svg';
import { ReactComponent as X } from '../assets/x.svg';
import { removeOpen } from '../redux/action';
import Modal from './Modal.jsx';
const Open = ({ reducerOpen, removeOpen }) => {
  const [state, setstate] = useState(false);
  const [data, setdata] = useState(null);

  return (
    <>
      <div className='row p-2'>
        <div className=' p-5 border'>
          <div className='col-md-12 d-flex justify-content-center '>
            <h2>Open</h2>
            <span className='btn btn-danger mx-5'>
              <h4>{reducerOpen.length}</h4>
            </span>
          </div>
        </div>
        {reducerOpen.map((i) => (
          <div key={i.id} className='col-md-12 my-2 border'>
            <div className=' p-2 d-flex d-flex justify-content-between'>
              <p>{i.text}</p>
              <div>
                <Pen
                  onClick={() => {
                    setdata(i);
                    setstate(true);
                  }}
                  style={{ height: '20px', marginRight: '10px' }}
                />
                <X onClick={() => removeOpen(i.id)} />
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            setdata(null);
            setstate(true);
          }}
          className='w-25 mt-2 border btn btn-light'
        >
          Add task
        </button>
      </div>
      {state && (
        <Modal
          data={data}
          state={state}
          setstate={setstate}
          action='ADD_OPEN'
        />
      )}
    </>
  );
};

export default connect(({ reducerOpen }) => ({ reducerOpen }), { removeOpen })(
  Open
);
