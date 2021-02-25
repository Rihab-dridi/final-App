import React from 'react';
import { useSelector } from 'react-redux';

import { Spinner } from 'reactstrap';

const Dashboard = () => {
  const user = useSelector((state) => state.authReducer.user);
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
          {user&& user.favorite
          .map((book,i)=> 
          <div> 
            <h1>fav</h1>
          </div>)
          }
        </div>
    </div>
  );
};

export default Dashboard;