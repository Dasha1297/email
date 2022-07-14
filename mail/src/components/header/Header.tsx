import style from "./style.module.css";
import logo from "../../assets/cat.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header>
      <div className={style.header}>
        <div className={style.header__logo}>
          <img src={logo} alt='logo' />
          <div className={style.logo__text}>
            <p>- Письма отправляете?</p>
            <p>- Нет, просто показываем</p>
            <p>- Красивое...</p>
          </div>
        </div>
        <div className={style.header__contacts}>
          <FontAwesomeIcon icon={faTelegram} />
          <a href='https://t.me/Darya_Lukina'>Лукина Дарья</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
