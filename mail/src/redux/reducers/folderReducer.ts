import { AnyAction } from "redux";
import { Folder } from "../../models/Folder";
import {
  FETCH_FOLDERS,
  ADD_FOLDER,
  DELETE_FOLDER,
  UPDATE_FOLDER,
} from "../consts";

type FolderStateType = {
  folders: Array<Folder>;
};

const initialState: FolderStateType = {
  folders: [
    { name: "Входящие", id: "1" },
    { name: "Отправленные", id: "2" },
    { name: "Черновики", id: "3" },
    { name: "Удаленные", id: "4" },
    { name: "Спам", id: "5" },
  ],
};

const folderReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_FOLDERS:
      return { folders: action.payload };
    case ADD_FOLDER:
      return { folders: [...state.folders, action.payload] };
    case DELETE_FOLDER:
      return {
        folders: state.folders.filter((folder) => folder.id !== action.payload),
      };
    case UPDATE_FOLDER:
      return {
        folders: state.folders.map((folder) =>
          folder.id === action.payload.id
            ? { ...folder, ...action.payload.data }
            : folder
        ),
      };
    default:
      return state;
  }
};

export default folderReducer;
