import React from "react";
import { useSelector } from "react-redux";
function Profile() {
  const data = useSelector((state) => state.authReducer);
  console.log(data.user.username)
  return (
    <div>
     <h1>{data&&data.user.username}</h1>
      <h3>{data&&data.user.email}</h3> 
    </div>
  );
}

export default Profile;
