import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,

  NavLink,
  Alert,
} from 'reactstrap';
import LoginModal from "../new/newlogin";



export const VisitorModal = ({setModal, modal}) => {
 

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
 
 

  return (
    <div style={{ padding: '0 15px' }}>
      <NavLink onClick={toggle} href="#">
        Login
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className='m-auto'  toggle={toggle}>Would you please Log in First!! </ModalHeader>
        <ModalBody>
   
             <div style={{ display:'flex'}}>
              <Button
                color="light"
                style={{ margin: '2rem', }}
                block
                onClick={toggle}
              >
                Cancel
              </Button>
              <Button
                color="light"
                style={{ margin: '2rem', }}
                block
              >
                <LoginModal />
              </Button>
              </div>
        </ModalBody>
      </Modal>
    </div>
  );
};


export const StartModal = () => {
 
    const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
 
 

  return (
    <div style={{ padding: '0 15px' }}>
      <NavLink onClick={toggle} href="#">
        Start
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className='m-auto'  toggle={toggle}>Do you want to login!! </ModalHeader>
        <ModalBody>
   
             <div style={{ display:'flex'}}>
                <Link to='/reports'>
           <Button
                color="light"
                style={{ margin: '2rem', minWidth:'200px', marginRight:'5px', height:'55px'}}
                block
                onClick={toggle}
              >
                Skip
              </Button>
              </Link>
              <Button
                color="light"
                style={{ margin: '2rem', }}
                block
              >
                <LoginModal />
              </Button>
              </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default StartModal;