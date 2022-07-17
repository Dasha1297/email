import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { Folder } from "../../models/Folder";
import { getFolders } from "../../redux/actions/FolderActions";
import AddFolder from "./addFolder/AddFolder";
import FolderBlock from "./folderBlock/FolderBlock";
import style from "./style.module.css";

const Navbar = () => {
  const folders = useAppSelector((state) => state.folderReducer.folders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFolders());
  }, [dispatch]);

  return (
    <div className={style.folders}>
      <AddFolder />
      {folders.map((folder: Folder) => (
        <FolderBlock folder={folder} />
      ))}
    </div>
  );
};

export default Navbar;
