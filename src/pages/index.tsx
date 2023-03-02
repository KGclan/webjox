import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Main = lazy(() => import("./main"));
const NotFound = lazy(() => import("./notFound"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};