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

export interface PaginationBaseProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  siblingCount?: number;
}

export interface PaginationProps extends PaginationBaseProps {
  onPageChange: (page: number) => void;
}




