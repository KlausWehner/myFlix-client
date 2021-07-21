import React, { useState } from 'react';

`./registration-view.scss` // was this parcel-syntax?
import './registration-view.scss';

export function RegistrationView(props) {
  const [ Username, setUsername ] = useState('');
  const [ Password, setPassword ] = useState('');
  const [ Email, setEmail ] = useState('');
  const [ Birthday, setBirthday ] = useState('');


  const handleSubmit = () => {
    e.preventDefault();
    console.log(username, password, email, birthday);
  };

  return (
    <form>
      <label>
        Your Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Set your Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Your email address:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Your birthday (optional):
        <input
          type="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </label>
      
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );









}