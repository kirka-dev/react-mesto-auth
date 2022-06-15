import React from "react";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit(password, email);
  }

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form" name="login-form" onSubmit={handleSubmit}>
        <input
          className="login__input"
          placeholder="Email"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
        />
        <input
          className="login__input"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
        />
        <button type="submit" className="login__button">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
