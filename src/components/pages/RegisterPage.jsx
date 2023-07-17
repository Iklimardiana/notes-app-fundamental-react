import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { register } from '../../utils/api';

function RegisterPage() {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [confirmPassword, setConfirmPassword] = useInput('');
  const navigate = useNavigate();

  const signUp = async (addUser) => {
    const { error } = await register(addUser);

    if (!error) {
      navigate('/login');
    }
  };

  return (
    <section>
      <h2>Register</h2>
      <form
        className="input-register"
        onSubmit={(event) => {
          event.preventDefault();
          if (password === confirmPassword) {
            signUp({ name, email, password });
          } else {
            alert('register gagal');
          }
        }}
      >
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={setName}
          required
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={setEmail}
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={setPassword}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={setConfirmPassword}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p className="register-page__footer">
        Sudah punya akun?
        <Link to="/login">Login</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
