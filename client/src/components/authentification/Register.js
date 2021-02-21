import React, { useState  } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {signUp} from '../../Redux/Actions/auth/actions'

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
  console.log(name, lastName,email, password)

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
     console.log("register")
     const newUser = { name, lastName, email, password };
     dispatch(signUp(newUser, history));
     
    // history.push('/');
    // setEmail('');
    // setName('');
    // setLastName('');
    // setPassword('');

  };
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
      <NavLink onClick={toggle} href="#">
        Register
      </NavLink>
      
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