import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import { addTask } from '../redux/action';

function Example({ state, setstate, addTask, action, data }) {
  const handleClose = () => setstate(false);
  const [text, setText] = useState(data?.text || '');
  const checkData = () => {
    if (data?.id) {
      return { id: data?.id, text };
    }
    return { text };
  };
  return (
    <>
      <Modal show={state} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type='text'
            onChange={(e) => setText(e.target.value)}
            value={text}
            className='form-control'
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              handleClose();
              addTask(action, data ? { id: data?.id, text } : { text });
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default connect(null, { addTask })(Example);
