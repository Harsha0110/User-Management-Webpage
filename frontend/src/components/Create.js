import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
//import 'bootstrap/dist/css/bootstrap.min.css';

const Create = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [age, setAge] = useState(0);
    const [error,setError] =useState("");
    const navigate =useNavigate();

    console.log(name,email, age);
   

    const handleSubmit =async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      console.log("Submitted Data:", { name, email, age });
      // You can also send the data to a server or API here
      const addUser ={name,email,age};
      const response = await fetch("http://localhost:5000",
        {
          method :"POST",
          body : JSON.stringify(addUser),
          headers:
          {
            "Content-type": "application/json",
          },
        }
      );
      const result = await response.json();

      if(!response.ok){
        console.log(result.error() );
       setError(result.error);

        
      }
      
      if(response.ok)
      {
        console.log(result);
        setError("");
        setName("");
        setEmail("");
        setAge(0);
        navigate("./Read")
        

        
      }
    };
        
  return (

    

    <div className="container my-2">
    {error && <div className="alert alert-danger" >
      {error}</div>}

    <h2 className="text-center">Enter the data</h2>

    <form onSubmit={handleSubmit}>
    <div className="row g-3">

  <div className="col">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name" 
    value={name} onChange={(e)=> setName( e.target.value)} />
  </div>


  <div className="mb-3">
    <input type="email" className="form-control" placeholder="Email"
     aria-label="Email" 
     value={email} onChange={(e)=> setEmail(e.target.value)}/>
  </div>
</div>

<div className="col">
    <input type="number" className="form-control" placeholder="Age" 
    aria-label="Age"
    value={age} onChange={(e)=> setAge(e.target.value)} />
  </div>

     {/*Submit buttton */}
     <div className="mt-3">
      <button type="submit" className="btn btn-primary">Submit</button>

     </div>
     </form>
     </div>
  )
}

export default Create