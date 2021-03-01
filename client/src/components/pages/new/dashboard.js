import React, {useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getBooks } from "../../../Redux/Actions/actions";
import { Spinner } from 'reactstrap';
import FavList from './favList';

const Dashboard = () => {

  const user = useSelector((state) => state.authReducer.user);
  const  favorite=user?.favorite
 
  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color: 'secondary' }}
          type="grow"
        />
      </div>
    );
  }

  return (
    <div>
       <div className="profile">
            <img className="profilePicture" src={user?.image} alt={user?.name}  />
            <h3>{user?.name} {user.lastname}</h3>
            <h6>{user?.email}</h6>
        </div>
        <div>
          {favorite
          .map((book,i)=> 
            
          <div >  
            <FavList ID={book._id} />
          </div>
        
         )
          }
        </div>
    </div>
  );
};

export default Dashboard;