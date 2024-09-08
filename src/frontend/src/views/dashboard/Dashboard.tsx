import CountryOverviewTable from "../../modules/country-overview-table/CountryOverviewTable.tsx";
import FilterPillBar from "../../modules/filter-pill/FilterPillBar.tsx";
import { useEffect, useState } from "react";
import { CountryOverview } from "../../modules/common/types.ts";
import { DashboardProps } from "./types.ts";
import { SortPill } from "../../modules/sort-pill/SortPill.tsx";

export default function Dashboard(props: DashboardProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [sortValue, setSortValue] = useState<string>("name-a-z");
  const [countries, setCountries] = useState<CountryOverview[]>([]);

  useEffect(() => {
    switch (sortValue) {
      case "name-a-z":
        setCountries(
          props.countries.sort((a, b) =>
            a.name.common.localeCompare(b.name.common),
          ),
        );
        break;
      case "name-z-a":
        setCountries(
          props.countries.sort((a, b) =>
            b.name.common.localeCompare(a.name.common),
          ),
        );
        break;
      case "population-asc":
        setCountries(
          props.countries.sort((a, b) => a.population - b.population),
        );
        break;
      case "population-desc":
        setCountries(
          props.countries.sort((a, b) => b.population - a.population),
        );
        break;
    }

    if (selectedFilter === "All") {
      setCountries(props.countries);
      return;
    }

    const filteredCountries = props.countries.filter(
      (country: CountryOverview) => {
        if (country.continents.includes(selectedFilter)) {
          return country;
        }
      },
    );

    setCountries(filteredCountries);
  }, [props.countries, selectedFilter, sortValue]);

  return (
    <div>
      <div className="table-filter-sort">
        <FilterPillBar setSelectedFilter={setSelectedFilter} />
        <SortPill setSortValue={setSortValue} />
      </div>
      <CountryOverviewTable countries={countries} />
    </div>
  );
}
