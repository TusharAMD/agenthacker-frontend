import axios from "axios";
import React from "react";
import { useAuth0 } from '@auth0/auth0-react'

const UpdateMobile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [mobile, setMobile] = React.useState("");

  const handleSubmit = (e) => {
        axios.post(`http://localhost:5000/updatePh`, { mobile: mobile, user: user.email })
        .then(res => {
        console.log("response",res.data);
        })
    };

  return (
        <div>
            <h3 style={{color:"white"}}>Update or Add Phone No</h3>
            <input value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default UpdateMobile;