import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import NotFound from "./NotFound/NotFound";
import Dashboard from "./Dashboard/Dashboard";
import { ArtikelManagementContext } from "./ArtikelManagementContext";
import ShowArtikelPage from "./ShowArtikelPage/ShowArtikelPage";
import AddArtikel from "./AddArtikel/AddArtikel";

export default function ArtikelApp() {
  const [loggedInUserName, setLoggedInUserName] = useState("");
  const { isUserLoggedIn, setIsUserLoggedIn, handleLogIn } = useContext(
    ArtikelManagementContext,
  );

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login successLogIn={handleLogIn} />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              isUserLoggedIn ? (
                <Dashboard loggedInUserName={loggedInUserName} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="/showartikelpage/:id" element={<ShowArtikelPage />} />
          <Route
            path="/add_artikel"
            element={
              isUserLoggedIn ? <AddArtikel /> : <Navigate to="/" replace />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
