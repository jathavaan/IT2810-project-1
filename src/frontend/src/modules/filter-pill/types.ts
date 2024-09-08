export interface FilterPillBarProps {
  setSelectedFilter: (filter: string) => void;
}

export interface FilterPillProps {
  pillKey: string;
  label: string;
  isActive: boolean;
  pills: FilterPillProps[] | undefined;
  setPills: undefined | ((pills: FilterPillProps[]) => void);
}
