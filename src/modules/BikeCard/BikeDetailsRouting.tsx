import { Route, Routes } from "react-router-dom";
import BikeDetailsComponent from "./BikeDetailsComponent";
import BikeCardIndex from "./pages/BikeCardIndex";

const BikeDetailsRouting = () => {
  return (
    <Routes>
      <Route element={<BikeDetailsComponent />}>
        <Route path="/" element={<BikeCardIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default BikeDetailsRouting;
