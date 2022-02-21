import React from "react";

export const Signup = () => {
  return (
    <>
      <div>Signup</div>
      <div>
        <a href="/">Login</a>
      </div>
      <form>
        <br />
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" name="username" id="username" />
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

        <button type="submit">REGISTER</button>
      </form>
    </>
  );
};
