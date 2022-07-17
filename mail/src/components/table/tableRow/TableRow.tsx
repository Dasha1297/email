import { Letter } from "../../../models/Letter";
import style from "./style.module.css";
type TableRowPropsType = {
  row: Letter;
};
const TableRow = ({ row }: TableRowPropsType) => {
  return (
    <tr className={style.row}>
      <td>{row.createdAt.slice(0, 10) + " " + row.createdAt.slice(12, 19)}</td>
      <td>{row.message}</td>
      <td>{row.author}</td>
    </tr>
  );
};

export default TableRow;
