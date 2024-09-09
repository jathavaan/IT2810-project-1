import { SortPillProps } from "./types.ts";
import React from "react";

export function SortPill(props: SortPillProps) {
  const options = [
    { value: "name-a-z", label: "A-Z" },
    { value: "name-z-a", label: "Z-A" },
    { value: "population-asc", label: "Population: Ascending" },
    { value: "population-desc", label: "Population: Descending" },
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    props.setSortValue(selectedValue);
  };

  return (
    <form>
      <select className="filter-pill sort-pill" onChange={handleSelectChange}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </form>
  );
}
