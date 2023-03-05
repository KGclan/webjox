import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./main";

const NotFound = lazy(() => import("./notFound"));
const AddTournament = lazy(() => import("./addTournament"));
const Tournament = lazy(() => import("./tournament"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/addBracket" element={<Suspense fallback="Загрузка..."><AddTournament /></Suspense>} />
      <Route path="/bracket/:id" element={<Suspense fallback="Загрузка..."><Tournament /></Suspense>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};