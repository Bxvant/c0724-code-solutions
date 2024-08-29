import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event?.currentTarget;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username-input">
        Username
        <br />
        <input id="username-input" name="username" type="text" />
      </label>
      <br />
      <label htmlFor="password-input">
        <input id="password-input" name="password" type="password" />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}
