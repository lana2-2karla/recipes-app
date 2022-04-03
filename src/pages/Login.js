import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setDisable] = useState(true);
  const history = useHistory();
  const SEIS = 6;

  useEffect(() => {
    const validationForm = () => {
      const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      if (password.length > SEIS && emailRegex.test(email)) {
        setDisable(false);
        return false;
      }
      setDisable(true);
    };
    validationForm();
  }, [email, password]);

  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  };

  return (
    <div>
      <h1>Recipes</h1>
      <form>
        <input
          data-testid="email-input"
          value={ email }
          type="email"
          name="email"
          id="email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          data-testid="password-input"
          value={ password }
          type="password"
          name="password"
          id="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ isDisable }
          onClick={ handleClick }
        >
          Entrar

        </button>
      </form>
    </div>
  );
};

export default Login;
