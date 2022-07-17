import style from "./style.module.css";

type StyledButtonPropsType = {
  btnText: string;
  type?: "button" | "submit" | "reset";
  handleClick?: () => void;
  disabled?: boolean;
};

const StyledButton = ({
  btnText,
  type,
  handleClick,
  disabled,
}: StyledButtonPropsType) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={style.button}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default StyledButton;
