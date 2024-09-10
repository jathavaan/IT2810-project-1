import CountryOverviewTableRow from "./CountryOverviewTableRow.tsx";
import { CountryOverview } from "../common/types.ts";
import { CountryOverviewTableProps } from "./types.ts";
import { useState } from "react";
import Pagination from "./Pagination.tsx";

export default function CountryOverviewTable(props: CountryOverviewTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const ROWS_PER_PAGE = 10;

  const indexOfLastRow = currentPage * ROWS_PER_PAGE;
  const indexOfFirstRow = indexOfLastRow - ROWS_PER_PAGE;
  const currentCountries = props.countries.slice(indexOfFirstRow, indexOfLastRow);


  return (
    <>
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th className="right-align-column">Population</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {currentCountries.map((country: CountryOverview) => (
          <CountryOverviewTableRow country={country} />
        ))}
      </tbody>
    </table>
    <Pagination
      currentPage={currentPage}
      totalItems={props.countries.length}
      pageSize={ROWS_PER_PAGE}
      onPageChange={setCurrentPage}
      />
    </>
  );
}
