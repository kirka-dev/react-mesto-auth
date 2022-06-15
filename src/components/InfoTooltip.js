import RegisterError from "../images/RegisterError.svg";
import RegisterSuccess from "../images/RegisterSuccess.svg";

function InfoToolTip(props) {
  return (
    <div className={"popup" + (props.isOpen ? " popup_show" : "")}>
      <div className="popup-info">
        <img
          src={props.isRegisterSuccess ? RegisterSuccess : RegisterError}
          className="popup-info__image"
          alt="Статус"
        />
        <h3 className="popup-info__title">
          {props.isRegisterSuccess
            ? "Вы успешно зарегистрировались"
            : "Что-то пошло не так\n Попробуйте еще раз."}
        </h3>
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close"
        ></button>
      </div>
    </div>
  );
}

export default InfoToolTip;
