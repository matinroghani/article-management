import React from "react";
import styles from "./ShowArtikelPage.module.css";

export default function ArtikelsHeader({ title }) {
  return (
    <>
      <div className={styles.articleHeader}>
        <h1> {title}</h1>
        <div className={styles.articleMeta}>
          <span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="currentColor"
              />
            </svg>
            نویسنده: علی احمدی
          </span>
          <span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H6V3c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 17H5c-.55 0-1-.45-1-1V11h16v9c0 .55-.45 1-1 1z"
                fill="currentColor"
              />
            </svg>
            تاریخ انتشار: ۱۴۰۳/۰۱/۱۵
          </span>
        </div>
      </div>
    </>
  );
}
