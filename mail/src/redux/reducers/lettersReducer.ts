import { FETCH_LETTERS } from "./../consts";
import { AnyAction } from "redux";
import { Letter } from "./../../models/Letter";

type LettersStateType = {
  letters: Array<Letter>;
};
const initialState: LettersStateType = {
  letters: [
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "1",
    },
    {
      id: "1",
      message: "ВАПРОЛЖДвлапир ппапвлоплрыаылп рлыпловап",
      author: "Имя Фамилия",
      createdAt: "01.01.2001",
      folderId: "3",
    },
  ],
};

const lettersReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_LETTERS:
      return { letters: action.payload };
    default:
      return state;
  }
};

export default lettersReducer;
