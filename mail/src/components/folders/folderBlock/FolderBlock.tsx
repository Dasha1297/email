import { Folder } from "../../../models/Folder";
import icon from "../../../assets/folder.svg";
import style from "./style.module.css";
import { Link, useLocation } from "react-router-dom";

type FolderBlockPropsType = {
  folder: Folder;
};

const FolderBlock = ({ folder }: FolderBlockPropsType) => {
  const { search } = useLocation();
  console.log(search);
  return (
    <div className={style.folder}>
      <img src={icon} alt='иконка папки' />
      <Link to={`/folder=${folder.id}`}>{folder.name}</Link>
    </div>
  );
};

export default FolderBlock;
