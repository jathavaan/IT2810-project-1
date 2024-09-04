import { Flags, Name } from "../common/types.ts";

export interface CountryOverview {
  cca2: string;
  fifa: string;
  name: Name;
  population: number;
  flags: Flags;
  continents: string[];
}

export interface CountryOverviewTableRowProps {
  country: CountryOverview;
}
