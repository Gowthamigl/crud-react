import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function AddUser() {
  const [user, setUser] = useState({
    _id:'',
    first_name: '',
    email: '',
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7000/users', user);
      //history.push('/');
      navigate('/');
    } catch (error) {
      console.error('Error adding user:', error);
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          id:
          <input
            type="text"
            name="_id"
            value={user._id}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          first Name:
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUser;