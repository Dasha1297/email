import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { StyledCloseBtn, StyledModal } from "./modal";
type ModalWrapPropsType = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: () => Promise<void>;
};
const ModalWrap = ({
  children,
  isOpen,
  setIsOpen,
  onSubmit,
}: ModalWrapPropsType) => {
  const handleClose = () => setIsOpen(false);

  return (
    <Modal
      open={isOpen}
      aria-labelledby='modal-modal-title'
      onClose={handleClose}
    >
      <StyledModal component='form' onSubmit={onSubmit}>
        <StyledCloseBtn onClick={handleClose}>
          <CloseIcon />
        </StyledCloseBtn>
        {children}
      </StyledModal>
    </Modal>
  );
};

export default ModalWrap;
