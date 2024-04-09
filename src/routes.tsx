import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";

const Catalog = lazy(() => import("./pages/Catalog"));
const Cart = lazy(() => import("./pages/Cart"));
const FinishCart = lazy(() => import("./pages/Cart/FinishCart"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/finishcart" element={<FinishCart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Catalog />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
