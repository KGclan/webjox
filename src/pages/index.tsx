import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PreLoader } from "shared/ui";

const NotFound = lazy(() => import("./notFound"));
const AddTournament = lazy(() => import("./addTournament"));
const Tournament = lazy(() => import("./tournament"));
const Main = lazy(() => import("./main"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<PreLoader />}><Main /></Suspense>} />
      <Route path="/addBracket" element={<Suspense fallback={<PreLoader />}><AddTournament /></Suspense>} />
      <Route path="/bracket/:id" element={<Suspense fallback={<PreLoader />}><Tournament /></Suspense>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};