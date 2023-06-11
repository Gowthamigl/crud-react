import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateUser() {
  const [user, setUser] = useState({
    _id: '',
    first_name: '',
    email: '',
  });

  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch the user data from the server
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
        // Handle the error (e.g., display an error message)
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:7000/users/${id}`, user);
      navigate('/');
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
          />
        </label>
        <br />
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

export default UpdateUser;