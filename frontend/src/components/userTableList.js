import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './userTable';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the users data from the server
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:7000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle the error (e.g., display an error message)
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <UserTable users={users} />
    </div>
  );
}

export default UserList;