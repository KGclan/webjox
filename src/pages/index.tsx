import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Main = lazy(() => import("./main"));
const NotFound = lazy(() => import("./notFound"));
const AddBracket = lazy(() => import("./addBracket"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/addBracket" element={<AddBracket />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};