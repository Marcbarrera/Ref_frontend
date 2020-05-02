import React, {useState} from 'react';
import Modal from 'react-modal';
import '../src/auth/SignupModal.css';
import SignupModalContent from './auth/SignupModalContent';


Modal.setAppElement('#root') //això s'inclou per l'accesibilitat. Els lectors per cecs p.E.

function ModalSignup () {
  const [modalIsOpen, setModalIsOpen]= useState(false)
  return(
    <div className='App'>
      <button onClick={()=>setModalIsOpen(true)}>Signup</button>
          <Modal className="hola" isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
            <SignupModalContent></SignupModalContent>
            <div>
              <button className='modal-close-button' onClick={()=> setModalIsOpen (false)}>close</button>
            </div>
          </Modal>
        </div>
  
  )
}
export default ModalSignup;