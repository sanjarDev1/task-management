import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Pen } from '../assets/pen.svg';
import { ReactComponent as X } from '../assets/x.svg';
import Modal from './Modal.jsx';
import { removeProgress } from '../redux/action';

const Inprogress = ({ progressReducer, removeProgress }) => {
  const [state, setstate] = useState(false);
  const [data, setdata] = useState(null);

  return (
    <>
      <div className='row p-2'>
        <div className=' p-5 border'>
          <div className='col-md-12 d-flex justify-content-center '>
            <h2>Inprogrdess</h2>
            <span className='btn btn-danger mx-5'>
              <h4>{progressReducer.length}</h4>
            </span>
          </div>
        </div>
        {progressReducer.map((i) => (
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
                <X onClick={() => removeProgress(i.id)} />
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
          state={state}
          setstate={setstate}
          action='ADD_PROGRESS'
          data={data}
        />
      )}
    </>
  );
};

export default connect(({ progressReducer }) => ({ progressReducer }), {
  removeProgress,
})(Inprogress);
