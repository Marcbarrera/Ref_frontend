import React, {useState} from 'react';
import Modal from 'react-modal';
import SignupModal from './auth/SignupModal';


Modal.setAppElement('#root') //això s'inclou per l'accesibilitat. Els lectors per cecs p.E.

function ModalSignin () {
  const [modalIsOpen, setModalIsOpen]= useState(false)
  return(
    <div className='App'>
      <button onClick={()=>setModalIsOpen(true)}>Signup Modal</button>
          <Modal className='hola' isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
          <SignupModal></SignupModal>

            <div>
              <button className='modal-close-button' onClick={()=> setModalIsOpen (false)}>close</button>
            </div>
          </Modal>
        </div>
  
  )
}
export default ModalSignin;