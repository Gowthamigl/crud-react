import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:7000/users');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching userssss.');
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/users/${id}`);
      fetchUsers();
    } catch (error) {
      setError('Error deleting user.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
         <Link to="/adduser" className="button is-primary mt-2">AddNew</Link>
         <br></br><br></br>
         <Link to="/usertableview" className="button is-primary mt-2">Table view</Link>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>User Id</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user._id}>
              <td>{index+1}</td>
              <td>{user._id}</td>
              <td>{user.first_name}</td>
              <td>{user.email}</td>
              <td>
              <Link to={`/updateuser/${user._id}`} className="btn btn-primary"> Edit</Link>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;