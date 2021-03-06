import React, {useState} from 'react';
import Modal from 'react-modal';
import '../src/auth/SignupModal.css';
import SigninModalContent from './auth/SigninModalContent';


Modal.setAppElement('#root') //això s'inclou per l'accesibilitat. Els lectors per cecs p.E.

function ModalSignin () {
  const [modalIsOpen, setModalIsOpen]= useState(false)
  return(
    <div className='App'>
      <button onClick={()=>setModalIsOpen(true)}>Signin</button>
          <Modal className="hola" isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
            <SigninModalContent></SigninModalContent>
            <div>
              <button className='modal-close-button' onClick={()=> setModalIsOpen (false)}>close</button>
            </div>
          </Modal>
        </div>
  
  )
}
export default ModalSignin;