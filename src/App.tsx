import React, { Fragment } from "react";
import "./App.scss";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import ManageDecs from "./pages/ManageDecs";
import Roadmap from "./pages/Roadmap";
import MissingPage from "./pages/MissingPage";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/managedecs" element={<ManageDecs />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/*" element={<MissingPage />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
