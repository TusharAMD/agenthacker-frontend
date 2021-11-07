import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Jdenticon from 'react-jdenticon';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <p class="welcome">Welcome Agent <p>{user.name.split(" ")[0][0]}{user.name.split(" ")[1][0]}</p></p>
        <p className="avatargenerated">Here is the Avatar we generated for you</p>
        <p className="picon"><Jdenticon size="48" value={user.name} /></p>
      </div>
    )
  );
};

export default Profile;