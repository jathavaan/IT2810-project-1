export interface CountryOverview {
  cca2: string;
  fifa: string;
  name: Name;
  population: number;
  flags: Flags;
  continents: string[];
}

interface Name {
  common: string;
}

interface Flags {
  png: string;
}
