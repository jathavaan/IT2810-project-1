import Dashboard from "./views/dashboard/Dashboard.tsx";
import { Route, Routes } from "react-router-dom";
import Favorites from "./views/favourites/Favourites.tsx";
import { useCountryOverview } from "./modules/common/queries.ts";

function App() {
  const response = useCountryOverview();
  if (response.isLoading) {
    return <div>Loading...</div>;
  }

  if (response.isError || response.data?.data === null) {
    return <div>Failed to fetch data</div>;
  }

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={<Dashboard countries={response.data!.data} />}
        />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
