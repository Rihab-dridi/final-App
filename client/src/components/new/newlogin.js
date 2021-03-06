import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from 'reactstrap';

import { loginUser } from '../../Redux/Actions/auth/actions';
import Register from './newRegister'

const LoginModal = () => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ padding: '0 15px' }}>
      <nav onClick={toggle} style={{color:'white'}} href="#">
        sign IN
      </nav>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                value={email}
                name="email"
                id="email"
                placeholder="email"
                className="mb-3"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                value={password}
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={handleLogin}
              >
                Login
              </Button>
            </FormGroup>
          </Form>
          <Label  >  you don't have an account yet ?  </Label>
          <Button
                color="dark"
                block
              >
                <Register/>
              </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;