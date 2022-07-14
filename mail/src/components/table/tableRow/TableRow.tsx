import { Letter } from "../../../models/Letter";
import style from "./style.module.css";
type TableRowPropsType = {
  row: Letter;
};
const TableRow = ({ row }: TableRowPropsType) => {
  return (
    <tr className={style.row}>
      <td>{row.createdAt}</td>
      <td>{row.message}</td>
      <td>{row.author}</td>
    </tr>
  );
};

export default TableRow;
