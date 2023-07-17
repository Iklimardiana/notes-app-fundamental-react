import React, { useContext } from 'react';
import useInput from '../hooks/useInput';
import { AuthContext } from '../../contexts/AllContext';
import { login, putAccessToken } from '../../utils/api';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const signIn = async (user) => {
    const { error, data } = await login(user);
    if (!error) {
      putAccessToken(data.accessToken);
      setAuth(data);
      navigate('/');
    }
  };

  return (
    <section>
      <h2>Login</h2>
      <form
        className="input-login"
        onSubmit={(event) => {
          event.preventDefault();
          signIn({ email, password });
        }}
      >
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
        <button type="submit">Login</button>
      </form>
      <p className="input-page__footer">
        Sudah punya akun?
        <Link to="/register"> Register</Link>
      </p>
    </section>
  );
}

export default LoginPage;
