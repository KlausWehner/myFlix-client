import React, { useState } from 'react';

`./registration-view.scss` // was this parcel-syntax?
import './registration-view.scss';

export function RegistrationView(props) {
  const [ Username, setUsername ] = useState('');
  const [ Password, setPassword ] = useState('');
  const [ Email, setEmail ] = useState('');
  const [ Birthday, setBirthday ] = useState('');

}