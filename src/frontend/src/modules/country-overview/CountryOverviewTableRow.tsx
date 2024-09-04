import { CountryOverviewTableRowProps } from "./countryOverviewTypes.ts";

export default function CountryOverviewTableRow({
  country,
}: CountryOverviewTableRowProps) {
  return (
    <tr key={country.cca2}>
      <td>
        <img src={country.flags.png} alt={country.name.common} height="10" />
      </td>
      <td>{country.name.common}</td>
      <td>{country.population}</td>
      <td>{country.cca2}</td>
    </tr>
  );
}
