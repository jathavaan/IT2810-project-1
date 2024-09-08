import FilterPill from "./FilterPill.tsx";
import { FilterPillBarProps, FilterPillProps } from "./types.ts";
import { useEffect, useState } from "react";

export default function FilterPillBar(props: FilterPillBarProps) {
  const [pills, setPills] = useState<FilterPillProps[]>([
    {
      pillKey: "all",
      label: "All",
      isActive: true,
      pills: undefined,
      setPills: undefined,
    },
    {
      pillKey: "antarctica",
      label: "Antarctica",
      isActive: false,
      pills: undefined,
      setPills: undefined,
    },
    {
      pillKey: "north-america",
      label: "North America",
      isActive: false,
      pills: undefined,
      setPills: undefined,
    },
    {
      pillKey: "europe",
      label: "Europe",
      isActive: false,
      pills: undefined,
      setPills: undefined,
    },
    {
      pillKey: "africa",
      label: "Africa",
      isActive: false,
      pills: undefined,
      setPills: undefined,
    },
    {
      pillKey: "asia",
      label: "Asia",
      isActive: false,
      pills: undefined,
      setPills: undefined,
    },
    {
      pillKey: "oceania",
      label: "Oceania",
      isActive: false,
      pills: undefined,
      setPills: undefined,
    },
    {
      pillKey: "south-america",
      label: "South America",
      isActive: false,
      pills: undefined,
      setPills: undefined,
    },
  ]);
  useEffect(() => {
    const selectedFilter = pills.find((pill: FilterPillProps) => pill.isActive);
    props.setSelectedFilter(selectedFilter!.label || "all");
  }, [pills, props]);

  return (
    <div className="filter-pill-bar">
      {pills.map((pill: FilterPillProps) => (
        <FilterPill
          pillKey={pill.pillKey}
          label={pill.label}
          isActive={pill.isActive}
          pills={pills}
          setPills={setPills}
        />
      ))}
    </div>
  );
}
