import React from 'react';
import './SignIn.css'; // Optional: Add styles for the sign-in page

const SignIn = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    // Add your sign-in logic here (e.g., API call to authenticate user)
    alert('Sign-In Successful!');
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <form className="sign-in-form" onSubmit={handleSignIn}>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit" className="sign-in-btn">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
