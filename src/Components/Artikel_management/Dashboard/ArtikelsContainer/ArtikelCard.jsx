import React, { useContext } from "react";
import styles from "../Dashboard.module.css";
import { Link } from "react-router-dom";
import { ArtikelManagementContext } from "../../ArtikelManagementContext";

export default function ArtikelCard({ ...artikel }) {
  const { setArtikels } = useContext(ArtikelManagementContext);

  const handleRemoveArtikel = (id) =>{
    setArtikels((prev) => prev.filter((a) => a.id !== id))
  }

  return (
    <>
      <div className={styles.articleCard}>
        <h3>{artikel.title}</h3>
        <p> {artikel.summary}</p>
        <div className={styles.articleActions}>
          <button className={`${styles.btn} ${styles.btnEdit}`}>ویرایش</button>
          <Link
            to={`/showartikelpage/${artikel.id}`}
            className={`${styles.btn} ${styles.btnEdit}`}
          >
            مشاهده
          </Link>
          <button
            className={`${styles.btn} ${styles.btnDelete}`}
            onClick={() => handleRemoveArtikel(artikel.id)}
          >
            حذف
          </button>
        </div>
      </div>
    </>
  );
}
