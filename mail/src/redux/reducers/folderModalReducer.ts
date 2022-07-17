import {
  OPEN_EDIT_MODAL_FOLDER,
  CLOSE_MODAL_FOLDER,
  OPEN_CREATE_MODAL_FOLDER,
} from "../consts";
import { AnyAction } from "redux";
import { Folder } from "../../models/Folder";
import { Reducer } from "redux";

type FolderModalStateType = {
  isOpenEdit: boolean;
  folder: Folder;
  isOpenCreate: boolean;
};
const initialState: FolderModalStateType = {
  isOpenEdit: false,
  isOpenCreate: false,
  folder: {
    name: "",
    id: "",
  },
};

const folderModalReducer: Reducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case OPEN_EDIT_MODAL_FOLDER:
      return { isOpenEdit: true, folder: action.payload };
    case OPEN_CREATE_MODAL_FOLDER:
      return { ...state, isOpenCreate: true };
    case CLOSE_MODAL_FOLDER:
      return {
        isOpenEdit: false,
        isOpenCreate: false,
        folder: {
          name: "",
          id: "",
        },
      };
    default:
      return state;
  }
};

export default folderModalReducer;
