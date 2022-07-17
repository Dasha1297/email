import { Add } from "@mui/icons-material";
import { useAppDispatch } from "../../../hooks/state";
import { OPEN_CREATE_MODAL_FOLDER } from "../../../redux/consts";
import style from "./style.module.css";

const AddFolder = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={style.button}
      onClick={() => dispatch({ type: OPEN_CREATE_MODAL_FOLDER })}
    >
      <Add />
      <p className={style.label}>Создать папку</p>
    </button>
  );
};

export default AddFolder;
