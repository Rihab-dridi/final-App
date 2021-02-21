
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { Spinner } from 'reactstrap';
// import Home from '../pages/homePage';
// import Dashboard from '../../A';
// import { getAuthUser } from '../../Redux/Actions/auth/actions';



// import PrivateRoute from '../../privetRoute';


// function Profile() {
//   const dispatch = useDispatch();
//   const { isLoading } = useSelector((state) => state.authReducer);
//   const getUser = () => dispatch(getAuthUser());

//   useEffect(() => {
//     getUser();
//   }, []);

//   if (isLoading) {
//     return (
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <Spinner
//           style={{ width: '3rem', height: '3rem', color: 'secondary' }}
//           type="grow"
//         />
//       </div>
//     );
//   }

//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <PrivateRoute path="/dashboard" component={Dashboard} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default Profile;