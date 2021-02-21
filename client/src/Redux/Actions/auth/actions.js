import axios from 'axios'
import * as api from '../../API/api'
import { AUTH} from './constantes'

export const signIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

//import axios from 'axios';

// import {
//     USER_LOADING, LOGIN_USER, REGISTER_USER, LOGOUT_USER, GET_AUTH_USER, AUTH_ERRORS,} from './constantes';



//   const userLoading = () => (dispatch) => {
//     dispatch({
//       type: USER_LOADING,
//     });
//   };
//   export const registerUser = (formData) => async (dispatch) => {
//     dispatch(userLoading());
//     try {
//       const res = await axios.post('/user/register', formData);
//       dispatch({
//         type: REGISTER_USER,
//         payload: res.data, // { msg: 'User registred with success', user, token }
//       });
//     } catch (error) {
//       console.dir(error);
  
//       const { errors, msg } = error.response.data;
  
//       if (Array.isArray(errors)) {
//         errors.forEach((err) => alert(err.msg));
//       }
//       console.log(errors);
//       if (msg) {
//         alert(msg);
//       }
  
//       dispatch({
//         type: AUTH_ERRORS,
//       });
//     }
//   };
  
//   // Login User
//   export const loginUser = (formData) => async (dispatch) => {
//     dispatch(userLoading());
  
//     try {
//       const res = await axios.post('/user/login', formData);
//       dispatch({
//         type: LOGIN_USER,
//         payload: res.data, // { msg: 'Logged in with success', user, token }
//       });
//     } catch (error) {
//       console.dir(error);
  
//       const { errors, msg } = error.response.data;
  
//       if (Array.isArray(errors)) {
//         errors.forEach((err) => alert(err.msg));
//       }
//       console.log(errors);
//       if (msg) {
//         alert(msg);
//       }
  
//       dispatch({
//         type: AUTH_ERRORS,
//       });
//     }
//   };
  
//   // Get auth user
//   export const getAuthUser = () => async (dispatch) => {
//     dispatch(userLoading());
  
//     try {
//       //headers
//       const config = {
//         headers: {
//           'x-auth-token': localStorage.getItem('token'),
//         },
//       };
//       const res = await axios.get('/user/profile', config);
//       dispatch({
//         type: GET_AUTH_USER,
//         payload: res.data, // {user: req.user}
//       });
//     } catch (error) {
//       console.log(error);
//       dispatch({
//         type: AUTH_ERRORS,
//       });
//     }
//   };
  
//   export const logout = () => (dispatch) => {
//     dispatch({
//       type: LOGOUT_USER,
//     });
//   };