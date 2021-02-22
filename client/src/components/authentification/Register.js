import React, { useState, useEffect  } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {signUp} from '../../Redux/Actions/auth/actions'
import { GoogleLogin } from 'react-google-login';
import {IconUP} from './icon'

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
} from 'reactstrap';

import { registerUser } from '../../Redux/Actions/auth/actions';

const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const toggle = () => {
    setModal(!modal);
  };
  useEffect(() => {
    setModal(true);
  }, []);
  
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
     console.log("register")
     const newUser = { name, lastName, email, password };
     dispatch(signUp(newUser, history));
    // setEmail('');
    // setName('');
    // setLastName('');
    // setPassword('');

  };
  const GoogleSuccess = async (res)=>{
    
    const result= res?.profileObj
    const token = res?.tokenId
    try {
      dispatch({type:'AUTH',data:{result,token}})
      history.push('/profile')
    } catch (error) {
      console.log (error)
    }
    
  }
  const GoogleFailure =(error)=>{
     alert("google sign didn't succeed, please try again later")
     console.log(error)
  }
  const [show, setShow]=useState(" Show")
  const passworHandler=()=> {
    const x = document.getElementById("password");
    x.type = "text"? setShow("Hide"): setShow("show")
  }
  const showPassword=()=> {
    const x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
   passworHandler()
  }
  
 

  return (
    <div style={{ padding: '0 15px' }}>
     
      
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
      
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                value={name}
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus
              />
              <Label for="name">Last Name</Label>
              <Input
                type="text"
                value={lastName}
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="mb-3"
                onChange={(e) => setLastName(e.target.value)}
              />
              <Label for="email">Email</Label>
              <Input
                type="email"
                value={email}
                name="email"
                id="email"
                placeholder="email@email.com"
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
              <input
               type="checkbox" 
               onClick={showPassword}
              />
              <Label for="checkbox"> {show} Password</Label>
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={handleSubmit}
              >
                sign Up 
              </Button>
            </FormGroup>
          </Form>
          <GoogleLogin
    clientId='409252351530-406j41k8t5rlad9djrf4k2343hssta00.apps.googleusercontent.com'
    render={renderProps => (
      <button style={{  width:'100%', paddingLeft:'5px'}} onClick={renderProps.onClick} disabled={renderProps.disabled}>
         <IconUP/>
        </button>
        )}
        buttonText="Login"
       onSuccess={GoogleSuccess}
       onFailure={GoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
          <p>Already have an acount?</p>
           <Link  to='/Login'>  
           <Button
           style={{marginTop:"0px"}}
           color="light"
           block>Log in </Button>
           </Link>
       
        </ModalBody>
      </Modal>
     
    </div>
  );
};

export default RegisterModal;