import React from "react";
import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Roshani";
  const age = 20;

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
