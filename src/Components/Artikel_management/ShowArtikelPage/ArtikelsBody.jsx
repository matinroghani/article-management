import React from "react";
import styles from "./ShowArtikelPage.module.css";

export default function ArtikelsBody({ imageUrl, content }) {
  return (
    <>
      <div className={styles.articleImageContainer}>
        <img src={imageUrl} alt="تصویر شاخص مقاله" />
      </div>

      <div
        className={styles.articleContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}
