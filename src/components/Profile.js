import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  console.log(user);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <h2>{user.nickname}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  );
};

export default Profile;
