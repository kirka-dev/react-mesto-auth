import { Link, Route } from "react-router-dom";
import logo from "../images/logotype.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logotype" />
      <Route exact path="/">
        <p className="header__email">{props.email}</p>
        <Link
          to="/sign-in"
          className="header__link header__link_sign-out"
          onClick={props.onSignOut}
        >
          Выйти
        </Link>
      </Route>
      <Route exact path="/sign-in">
        <Link to="/sign-up" className="header__link">
          Регистрация
        </Link>
      </Route>
      <Route exact path="/sign-up">
        <Link to="/sign-in" className="header__link">
          Войти
        </Link>
      </Route>
    </header>
  );
}

export default Header;
