import { Route, Routes } from "react-router-dom";
import BikeDetailsComponent from "./BikeCardComponent";
import BikeCardIndex from "./pages/BikeCardIndex";
import BikeCardComponent from "./BikeCardComponent";

const BikeCardRouting = () => {
  return (
    <Routes>
      <Route element={<BikeCardComponent />}>
        <Route path="/" element={<BikeCardIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default BikeCardRouting;
