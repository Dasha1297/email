import { Folder } from "../../../models/Folder";
import icon from "../../../assets/folder.svg";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import MenuBlock from "../../UI/MenuBlock/MenuBlock";
import { useAppDispatch } from "../../../hooks/state";
import { OPEN_EDIT_MODAL_FOLDER } from "../../../redux/consts";
import { deleteFolder } from "../../../redux/actions/FolderActions";

type FolderBlockPropsType = {
  folder: Folder;
};

const FolderBlock = ({ folder }: FolderBlockPropsType) => {
  const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null);
  const handleCloseRowMenu = () => setAnchorMenuEl(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenuEl(event.currentTarget);
  };

  const dispatch = useAppDispatch();

  return (
    <div className={style.folder}>
      <img src={icon} alt='иконка папки' />
      <NavLink
        to={`/folder=${folder.id}`}
        className={({ isActive = React.createRef() }) =>
          isActive ? style["active"] : ""
        }
      >
        {folder.name}
      </NavLink>
      {Number(folder.id) > 5 && (
        <>
          <IconButton
            style={{ marginLeft: "auto" }}
            onClick={(e) => handleClick(e)}
          >
            <FontAwesomeIcon icon={faEllipsisV} />
          </IconButton>
          <MenuBlock anchorEl={anchorMenuEl} handleClose={handleCloseRowMenu}>
            <div className={style.menu}>
              <div
                onClick={() =>
                  dispatch({ type: OPEN_EDIT_MODAL_FOLDER, payload: folder })
                }
              >
                Редактировать
              </div>
              <div
                onClick={() => {
                  dispatch(deleteFolder(folder));
                  handleCloseRowMenu();
                }}
              >
                Удалить
              </div>
            </div>
          </MenuBlock>
        </>
      )}
    </div>
  );
};

export default FolderBlock;
