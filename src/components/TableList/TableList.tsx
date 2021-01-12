import PropTypes, { InferProps } from "prop-types";
import { usePagination } from "./../../hooks/usePagination";
import { TableHeader } from "./TableHeader/TableHeader";

interface TableListProps {
  setCurrentUser: (id: string | number) => {};
}

export function TableList({
  list,
  setCurrentUser,
}: TableListProps & InferProps<typeof TableList.propTypes>) {
  const { currentPaginationPage } = usePagination();

  return (
    <tbody>
      {list &&
        list.length &&
        list[currentPaginationPage].map((i: any, idx: any) => (
          <tr key={idx} onClick={(e: any) => setCurrentUser(i.id)}>
            <td>{i.id}</td>
            <td>{i.firstName}</td>
            <td>{i.lastName}</td>
            <td>{i.email}</td>
            <td>{i.phone}</td>
            <td>{i.adress.streetAddress}</td>
            <td>{i.adress.city}</td>
            <td>{i.adress.state}</td>
            <td>{i.adress.zip}</td>
          </tr>
        ))}
    </tbody>
  );
}

TableList.propTypes = {
  list: PropTypes.array,
  setCurrentUser: () => {},
};
