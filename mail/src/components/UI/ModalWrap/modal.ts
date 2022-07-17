import { Box, IconButton, styled } from "@mui/material";

export const StyledModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 550px;
  width: 100%;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  outline: none;
`;

export const StyledCloseBtn = styled(IconButton)`
  position: absolute;
  right: 12px;
  top: 0;
`;
