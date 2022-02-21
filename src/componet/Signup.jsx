import React, { useState } from "react";

function App() {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [hq, sethq] = useState("");
  const [py, setpy] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [state, setstate] = useState("");
  const [password, setpassword] = useState("");
  
}
  



export const Signup = () => {  
  return (
    <>
      <div>
        <a href="/">Login</a>
      </div>
      <div >Signup</div>
      <form >
        <br />
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" name="username" id="username"  />
        <br />
        <label htmlFor="hq">Highest Qualification</label>
        <br />
        <input type="text" name="hq" id="hq" />
        <br />
        <label htmlFor="py">Passing Year</label>
        <br />
        <input type="number" name="py" id="py" />
        <br />
        <label htmlFor="DOB">Date Of Birth</label>
        <br />
        <input type="date" name="DOB" id="DOB" />
        <br />
        <label htmlFor="gender">Gender</label>
        <br />
        <input type="text" name="gender" id="gender" />
        <br />
        <label htmlFor="state">State</label>
        <br />
        <input type="text" name="state" id="state" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" name="email" id="email" />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input type="text" name="phone" id="phone" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="text" name="password" id="password" />
        <br />

        <button type="submit" >REGISTER</button>
      </form>
    </>
  );
}
