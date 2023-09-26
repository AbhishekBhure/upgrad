import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/product/:id" element={<Detail />} />
    </>
  )
);
