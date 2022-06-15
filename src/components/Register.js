import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit(password, email);
  }

  return (
    <div className="register">
      <h2 className="register__title">Регистрация</h2>
      <form
        className="register__form"
        name="register-form"
        onSubmit={handleSubmit}
      >
        <input
          className="register__input"
          placeholder="Email"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
        />
        <input
          className="register__input"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
        />
        <button type="submit" className="register__button">
          Зарегистироваться
        </button>
        <Link className="register__login-link" to="/sing-in">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}

export default Register;
