import {
  ADD_FOLDER,
  DELETE_FOLDER,
  FETCH_FOLDERS,
  UPDATE_FOLDER,
} from "./../consts";
import { Folder, FolderValues } from "./../../models/Folder";
import { AppDispatch } from "..";
import { api } from "../../api/api";

export const createFolder =
  (data: FolderValues) => async (dispatch: AppDispatch) => {
    try {
      const response = await api.post("/folder/add", data);
      dispatch({ type: ADD_FOLDER, payload: response.data });
    } catch (error) {
      throw error;
    }
  };

export const getFolders = () => async (dispatch: AppDispatch) => {
  try {
    const response = await api.get("/folder");
    dispatch({ type: FETCH_FOLDERS, payload: response.data });
  } catch (error) {
    throw error;
  }
};

export const updateFolder = (data: Folder) => async (dispatch: AppDispatch) => {
  try {
    const response = await api.post(`/folder/update/${data.id}`, data);
    dispatch({ type: UPDATE_FOLDER, payload: response.data });
  } catch (error) {
    throw error;
  }
};

export const deleteFolder = (data: Folder) => async (dispatch: AppDispatch) => {
  try {
    await api.post(`/folder/delete/${data.id}`, data);
    dispatch({ type: DELETE_FOLDER, payload: data.id });
  } catch (error) {
    throw error;
  }
};
