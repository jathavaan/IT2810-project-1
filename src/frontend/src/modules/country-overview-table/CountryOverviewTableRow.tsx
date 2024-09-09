import FavoriteButton from "./FavoriteButton.tsx";
import { CountryOverviewTableRowProps } from "./types.ts";

export default function CountryOverviewTableRow({
  country,
}: CountryOverviewTableRowProps) {
  return (
    <tr key={country.cca2}>
      <td>
        <img src={country.flags.png} alt={country.name.common} height="10" />
      </td>
      <td>{country.name.common}</td>
      <td className="right-align-column">
        {country.population.toLocaleString()}
      </td>
      <td>
        <FavoriteButton countryCode={country.cca2} isFavorite={true} />
      </td>
    </tr>
  );
}
