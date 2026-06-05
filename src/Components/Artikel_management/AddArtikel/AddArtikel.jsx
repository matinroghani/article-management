import AddContent from "./AddContent";
import styles from "./AddArtikel.module.css";
import { useState } from "react";

export default function AddArtikel() {
    const [isArtikelAdded, setIsArtikelAdded] = useState(false)

  return (
    <>
      <div className={styles.containerWrapper}>
        <AddContent setIsArtikelAdded={setIsArtikelAdded} />
        {isArtikelAdded ? <p>مقاله اضافه شد</p> : <p> در حال اضافه کردن مقاله... </p>}
        
      </div>
    </>
  );
}
