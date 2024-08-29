import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  const errArray: string[] = [];
  if (password.length === 0) {
    errArray.push('Password is required');
  } else {
    if (password.length < 8) {
      errArray.push('Password must be at least 8 characters./');
    }
    if (!password.match(/\d/)) {
      errArray.push('Password must have a number./');
    }
    if (!password.match(/[A-Z]/)) {
      errArray.push('Password must have a capital letter./');
    }
    if (!password.match(/!|@|#|$|%|^|&|(|)|_|=/)) {
      errArray.push('Password must have a special character./');
    }
  }

  function checkPassword(): boolean {
    return password.length >= 8;
  }

  const isValid = checkPassword();

  return (
    <label htmlFor="password-box">
      Password
      <br />
      <input
        type="password"
        id="password-box"
        className="mr-2 p-1 w-[200px] border-[2px] border-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isValid ? <FaCheck /> : <FaTimes />}
      <p>{errArray}</p>
    </label>
  );
}
