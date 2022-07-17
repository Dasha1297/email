import { TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/state";
import { Folder } from "../../../models/Folder";
import { CLOSE_MODAL_FOLDER } from "../../../redux/consts";
import ModalWrap from "../../UI/ModalWrap/ModalWrap";
import StyledButton from "../../UI/StyledButton/StyledButton";
import style from "./style.module.css";

type FolderModalPropsType = {
  isOpen: boolean;
  submitCallback: (data: Folder) => Promise<void>;
};

const FolderModal = ({ isOpen, submitCallback }: FolderModalPropsType) => {
  const dispatch = useAppDispatch();
  const values = useAppSelector((state) => state.folderModalReducer.folder);

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty },
    reset,
  } = useForm<Folder>();

  useEffect(() => {
    reset(values);
  }, [reset, values]);

  const onSubmit = handleSubmit(async (data, event) => {
    try {
      event?.preventDefault();
      await submitCallback(data);
      dispatch({ type: CLOSE_MODAL_FOLDER });
    } catch (error) {
      console.log(error);
    }
  });

  const handleClose = () => {
    dispatch({ type: CLOSE_MODAL_FOLDER });
  };

  return (
    <ModalWrap isOpen={isOpen} setIsOpen={handleClose} onSubmit={onSubmit}>
      <div className={style.form}>
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <TextField {...field} label='Название папки' />
          )}
        />
        <StyledButton
          btnText='Сохранить'
          type='submit'
          disabled={!isDirty || !isValid}
        />
      </div>
    </ModalWrap>
  );
};

export default FolderModal;
