import './App.css';
import { RegisteredFormsControlled } from './RegisteredFormsControlled';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import './RegistrationFormUncontrolled.css';

export default function App() {
  return (
    <>
      <RegistrationFormUncontrolled />
      <RegisteredFormsControlled />
    </>
  );
}
