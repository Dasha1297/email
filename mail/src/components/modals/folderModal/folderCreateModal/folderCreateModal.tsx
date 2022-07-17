import { useAppDispatch, useAppSelector } from "../../../../hooks/state";
import { Folder } from "../../../../models/Folder";
import { createFolder } from "../../../../redux/actions/FolderActions";
import FolderModal from "../folderModal";

const FolderCreateModal = () => {
  const isOpen = useAppSelector(
    (state) => state.folderModalReducer.isOpenCreate
  );
  const dispatch = useAppDispatch();

  const submitCallback = async (data: Folder) => {
    dispatch(createFolder({ name: data.name }));
  };

  return <FolderModal isOpen={isOpen} submitCallback={submitCallback} />;
};

export default FolderCreateModal;
