import { useAppDispatch, useAppSelector } from "../../../../hooks/state";
import { Folder } from "../../../../models/Folder";
import { updateFolder } from "../../../../redux/actions/FolderActions";
import FolderModal from "../folderModal";

const FolderEditModal = () => {
  const isOpen = useAppSelector((state) => state.folderModalReducer.isOpenEdit);
  const dispatch = useAppDispatch();

  const submitCallback = async (data: Folder) => {
    dispatch(updateFolder(data));
  };

  return <FolderModal isOpen={isOpen} submitCallback={submitCallback} />;
};

export default FolderEditModal;
