import { useAppSelector } from "../../hooks/state";
import { Letter } from "../../models/Letter";
import TableRow from "./tableRow/TableRow";
import style from "./style.module.css";
import { useState } from "react";
import TablePagination from "../UI/TablePagination/TablePagination";

const Table = () => {
  const rows = useAppSelector((state) => state.lettersReducer.letters);

  const [pageNumber, setPageNumber] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  };

  const count = rows.length; // 10;
  console.log(count);

  return (
    <table className={style.table}>
      <tbody>
        {rows.map((row: Letter) => (
          <TableRow row={row} />
        ))}
      </tbody>
      <tfoot>
        <TablePagination
          count={Math.floor(rows.length / 10) + 1}
          page={pageNumber}
          handleChange={handleChange}
        />
      </tfoot>
    </table>
  );
};

export default Table;
