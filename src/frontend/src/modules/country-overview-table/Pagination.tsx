import usePagination from "./usePagination";
import { DOTS } from "./usePagination";
import { PaginationProps } from "./types";
import classnames from "classnames";

export default function Pagination(props: PaginationProps) {

  const paginationRange = usePagination({
    totalItems: props.totalItems,
    pageSize: props.pageSize,
    currentPage: props.currentPage
  });

  // If there are less than 2 pages, don't render pagination
  if (props.currentPage === 0 || paginationRange.length <= 1) {
    return null;
  }

  const onNextPage = () => {
    props.onPageChange(props.currentPage + 1);
  }

  const onPreviousPage = () => {
    props.onPageChange(props.currentPage - 1);
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="pagination-container">
      <li className={classnames("pagination-item", { disabled: props.currentPage === 1 })}
      onClick={onPreviousPage}
      >
      <div className="arrow left"></div>
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
      
        return (
          <li
            className={classnames("pagination-item", {selected: pageNumber === props.currentPage})}
            onClick={() => props.onPageChange(pageNumber as number)}>
            {pageNumber}
            </li>
        );
      })}
      <li
      className={classnames("pagination-item", 
      { disabled: props.currentPage === lastPage })}
      onClick={onNextPage}
      >
      <div className="arrow right"></div>
      </li>
    </ul>
      );
    };


