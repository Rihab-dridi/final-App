import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Icon from './icon'
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
    // dispatch(loginUser({ email, password }));
    // history.push('/dashboard');
    // setEmail('');
    // setPassword('');
  };
  const GoogleSuccess = async (res)=>{
    
    const result= res?.profileObj
    const token = res?.tokenId
    try {
      dispatch({type:'AUTH',data:{result,token}})
      history.push('/')
    } catch (error) {
      console.log (error)
    }
    
  }
  const GoogleFailure =(error)=>{
     alert("google sign didn't succeed, please try again later")
     console.log(error)
  }

  return (
    <div style={{ padding: '0 15px' }}>
      <NavLink onClick={toggle} href="#">
        Login
      </NavLink>
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
          <GoogleLogin
    clientId='409252351530-406j41k8t5rlad9djrf4k2343hssta00.apps.googleusercontent.com'
    render={renderProps => (
      <button style={{  width:'100%', paddingLeft:'5px'}} onClick={renderProps.onClick} disabled={renderProps.disabled}>
         <Icon/>
        </button>
    )}
    buttonText="Login"
   onSuccess={GoogleSuccess}
   onFailure={GoogleFailure}
    cookiePolicy={'single_host_origin'}
  />
          <p>you don't have an acount?</p>
           <Link  to='/signUp'>  
           <Button
           style={{marginTop:"0px"}}
           color="light"
           block>sign Up </Button>
           </Link>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;