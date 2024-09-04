import { useQuery } from "@tanstack/react-query";
import { getCountryOverview } from "./countryOverviewService.ts";

export function useCountryOverview() {
  return useQuery({
    queryKey: ["countryOverview"],
    queryFn: getCountryOverview,
  });
}
