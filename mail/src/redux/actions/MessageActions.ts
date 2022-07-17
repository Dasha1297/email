import { api } from "../../api/api";
import { FETCH_LETTERS } from "../consts";
import { AppDispatch } from "./../index";

export const getMessages =
  (pathname: string, search: string) => async (dispatch: AppDispatch) => {
    if (search === "") {
      search = "?page=1";
    }
    try {
      const response = await api.get(`/message${pathname}${search}`);
      dispatch({ type: FETCH_LETTERS, payload: response.data });
    } catch (error) {
      throw error;
    }
  };
