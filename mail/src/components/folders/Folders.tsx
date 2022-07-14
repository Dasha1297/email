import { useAppSelector } from "../../hooks/state";
import { Folder } from "../../models/Folder";
import FolderBlock from "./folderBlock/FolderBlock";
import style from "./style.module.css";

const Folders = () => {
  const folders = useAppSelector((state) => state.folderReducer.folders);

  return (
    <div className={style.folders}>
      {folders.map((folder: Folder) => (
        <FolderBlock folder={folder} />
      ))}
    </div>
  );
};

export default Folders;
