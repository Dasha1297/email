import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { Letter } from "../../models/Letter";
import TableRow from "./tableRow/TableRow";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import TablePagination from "../UI/TablePagination/TablePagination";
import { useLocation } from "react-router-dom";
import { getMessages } from "../../redux/actions/MessageActions";

const Table = () => {
  const rows = useAppSelector((state) => state.lettersReducer.messages);
  const count = useAppSelector((state) => state.lettersReducer.totalPages);
  const currentPage = useAppSelector(
    (state) => state.lettersReducer.currentPage
  );
  const dispatch = useAppDispatch();

  const [pageNumber, setPageNumber] = useState(currentPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  };

  const location = useLocation();

  useEffect(() => {
    dispatch(getMessages(location.pathname, location.search));
  }, [location, dispatch]);

  console.log(rows);

  return (
    <div>
      <table className={style.table}>
        <tbody>
          {rows.map((row: Letter, index: number) => (
            <TableRow row={row} key={index} />
          ))}
        </tbody>
      </table>
      {rows.lenght > 0 && (
        <TablePagination
          count={count}
          page={pageNumber}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default Table;
