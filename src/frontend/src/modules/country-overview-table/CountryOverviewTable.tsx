import CountryOverviewTableRow from "./CountryOverviewTableRow.tsx";
import { CountryOverview } from "../common/types.ts";
import { CountryOverviewTableProps } from "./types.ts";

export default function CountryOverviewTable(props: CountryOverviewTableProps) {
  return (
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
        {props.countries.map((country: CountryOverview) => (
          <CountryOverviewTableRow country={country} />
        ))}
      </tbody>
    </table>
  );
}
