import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [name, setName] = useState(""); // Use name state for user's name
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const { id } = useParams(); // Get user id from URL params
  const navigate = useNavigate();

  const getSingleUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/${id}`); // Ensure the URL is correct
      const result = await response.json();

      if (response.ok) {
        setError("");
        console.log('Fetched user:', result);
        setName(result.name); // Use the correct result keys
        setEmail(result.email);
        setAge(result.age);
       
      } else {
        console.error(result.error);
        setError(result.error);
      }
    } catch (err) {
      console.error('Error fetching user:', err);
      setError('Failed to fetch user data.');
    }
  };

  // Passing the edited data to backend
  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Submitted Data:', { name, email, age });

    const updatedUser = { name, email, age }; // Correct key for name

    try {
      const response = await fetch(`http://localhost:5000/${id}`, {
        method: 'PATCH', // Use PATCH for updating
        body: JSON.stringify(updatedUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result);
        setError("");
      
        navigate("/Read"); // Use absolute path for navigation
      } else {
        setError(result.error);
      }
    } catch (err) {
      console.error('Error updating user:', err);
      setError('Failed to update user.');
    }
  }

  // Run getSingleUser only once when the component mounts
  useEffect(() => {
    getSingleUser();
  }, []); // Include id in the dependency array for safety

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}

      <h2 className="text-center">Edit the data</h2>

      <form onSubmit={handleUpdate}>
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              value={name} // Use name here
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            aria-label="Age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))} // Convert to number
          />
        </div>

        {/* Submit button */}
        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
