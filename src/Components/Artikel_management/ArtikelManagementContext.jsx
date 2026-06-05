import { createContext, useEffect, useState } from "react";
import articlesData from "./Dashboard/ArtikelsContainer/ArtikelsData";

export const ArtikelManagementContext = createContext();

export function ArtikelManagementProvider({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [artikels, setArtikels] = useState([]);

  useEffect(() => {
    const storedArtikels = localStorage.getItem("artikels");
    if (storedArtikels) {
      setArtikels(JSON.parse(storedArtikels));
    }else{
      setArtikels(articlesData)
      localStorage.setItem("artikels", JSON.stringify(articlesData))
    }
  }, []);


  const handleLogIn = () => {
    setIsUserLoggedIn(true);
  };

  const addArtikel = (newArtikel) => {
    const updatedArtikels = [...artikels, newArtikel]
    setArtikels(updatedArtikels)
    localStorage.setItem("artikels", JSON.stringify(updatedArtikels))
    return updatedArtikels
  }

  return (
    <>
      <ArtikelManagementContext.Provider
        value={{ isUserLoggedIn, setIsUserLoggedIn, handleLogIn, artikels, addArtikel, setArtikels }}
      >
        {children}
      </ArtikelManagementContext.Provider>
    </>
  );
}
