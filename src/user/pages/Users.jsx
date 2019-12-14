import React from "react";

import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Leonardo Studart ",
      image:
        "https://images.unsplash.com/photo-1575379972039-7135ca5a3c7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
      places: 3
    }
  ];
  return <UsersList users={USERS} />;
};

export default Users;
