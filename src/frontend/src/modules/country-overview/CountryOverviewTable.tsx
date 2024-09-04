import { useCountryOverview } from "./countryOverviewQueries.ts";
import { CountryOverview } from "./countryOverviewTypes.ts";
import CountryOverviewTableRow from "./CountryOverviewTableRow.tsx";

export default function CountryOverviewTable() {
  const countryOverview = useCountryOverview();

  if (countryOverview.isPending) {
    return <div>Loading...</div>;
  }

  if (countryOverview.isError) {
    return <div>Error: {countryOverview.error.message}</div>;
  }

  if (countryOverview.isSuccess) {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Population</th>
            <th>Country code</th>
          </tr>
        </thead>
        <tbody>
          {countryOverview.data.data.map((country: CountryOverview) => (
            <CountryOverviewTableRow country={country} />
          ))}
        </tbody>
      </table>
    );
  }
}
