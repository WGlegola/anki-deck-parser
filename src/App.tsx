import React, { Fragment } from "react";
import "./App.scss";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./views/Welcome";
import ManageDecs from "./views/ManageDecs";
import Roadmap from "./views/Roadmap";
import MissingPage from "./views/MissingPage";
import Footer from "./components/Footer";
import NewDeck from "./views/NewDeck";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/managedecs/*" element={<ManageDecs />}>
            <Route path="newdeck" element={<NewDeck />} />
          </Route>
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/*" element={<MissingPage />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
