import { CountryOverview } from "../common/types.ts";

export interface CountryOverviewTableRowProps {
  country: CountryOverview;
}

export interface CountryOverviewTableProps {
  countries: CountryOverview[];
}

export interface FavoriteButtonProps {
  countryCode: string;
  isFavorite: boolean;
}
