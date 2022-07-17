import { Menu, MenuItem } from "@mui/material";

type MenuBlockPropsType = {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  children: React.ReactNode;
};
const MenuBlock = ({ anchorEl, handleClose, children }: MenuBlockPropsType) => {
  const open = Boolean(anchorEl);

  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.1))",
          mt: 1.5,
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem>{children}</MenuItem>
    </Menu>
  );
};

export default MenuBlock;
