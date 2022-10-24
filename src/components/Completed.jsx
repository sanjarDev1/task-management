import React, { useState } from 'react';
import { ReactComponent as Pen } from '../assets/pen.svg';
import { ReactComponent as X } from '../assets/x.svg';
import { connect } from 'react-redux';
import Modal from './Modal.jsx';
import { removeCompleted } from '../redux/action';

const Completed = ({ completedReducer, removeCompleted }) => {
  const [state, setState] = useState(false);
  const [data, setdata] = useState(null);

  return (
    <>
      <div className=' row p-2'>
        <div className='p-5 border'>
          <div className='col-md-12 d-flex justify-content-center'>
            <h2>Completed</h2>
            <span className='btn btn-danger mx-5'>
              <h4>{completedReducer.length}</h4>
            </span>
          </div>
        </div>
        {completedReducer.map((i) => (
          <div key={i.id} className='col-md-12 my-2 border'>
            <div className=' p-2 d-flex d-flex justify-content-between'>
              <p>{i.text}</p>
              <div>
                <Pen
                  onClick={() => {
                    setdata(i);
                    setState(true);
                  }}
                  style={{ height: '20px', marginRight: '10px' }}
                />
                <X onClick={() => removeCompleted(i.id)} />
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            setdata(null);
            setState(true);

          }}
          className='w-25 border  mt-2 btn btn-light'
        >
          Add task
        </button>
      </div>
      {state && (
        <Modal
          state={state}
          setstate={setState}
          action={'ADD_COMPLETED'}
          data={data}
        />
      )}
    </>
  );
};

export default connect(({ completedReducer }) => ({ completedReducer }), {
  removeCompleted,
})(Completed);
