import { FilterPillProps } from "./types.ts";
import { useEffect, useState } from "react";

const handleFilterPillOnClick = (
  key: string,
  pills: FilterPillProps[],
  setPills: (pills: FilterPillProps[]) => void,
) => {
  const updatedPills = pills.map((pill: FilterPillProps) => {
    if (pill.pillKey === key) {
      return { ...pill, isActive: true };
    } else {
      return { ...pill, isActive: false };
    }
  });

  setPills(updatedPills);
};

export default function FilterPill(props: FilterPillProps) {
  const [filterPillClassName, setFilterPilLClassName] = useState<string>();
  useEffect(() => {
    setFilterPilLClassName(
      props.isActive
        ? "filter-pill active-filter-pill"
        : "filter-pill inactive-filter-pill",
    );
  }, [props.isActive]);

  return (
    <div
      className={filterPillClassName}
      onClick={() =>
        handleFilterPillOnClick(props.pillKey, props.pills!, props.setPills!)
      }
    >
      <span>{props.label}</span>
    </div>
  );
}
