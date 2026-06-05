import React, { useContext } from "react";
import styles from "./ShowArtikelPage.module.css";
import ArtikelsHeader from "./ArtikelsHeader";
import ArtikelsBody from "./ArtikelsBody";
import { useParams } from "react-router-dom";
import { ArtikelManagementContext } from "../ArtikelManagementContext";

export default function ShowArtikelPage() {
  const id = useParams().id;
  const { artikels } = useContext(ArtikelManagementContext);
  const artikel = artikels.find((a) => a.id === id);
  if (!artikel) {
    return (
      <div className={styles.articlePageContainer}>
        <p>artiekl not found</p>
      </div>
    );
  }
  return (
    <>
      <div className={styles.articlePageContainer}>
        <ArtikelsHeader title={artikel.title} />

        <ArtikelsBody imageUrl={artikel.image} content={artikel.content} />

        <div className={styles.commentsSection}>
          <h2>نظرات کاربران</h2>

          <div className={styles.commentForm}>
            <textarea
              className={styles.commentTextarea}
              placeholder="نظر خود را وارد کنید..."
            ></textarea>
            <button className={styles.commentSubmitBtn}>ارسال نظر</button>
          </div>

          <div className={styles.commentList}>
            <div className={styles.commentCard}>
              <div className={styles.commentHeader}>
                <div className={styles.commentAvatar}>م</div>
                <div className={styles.commentUserInfo}>
                  <span className={styles.commentAuthor}>مریم رضایی</span>
                  <span className={styles.commentDate}>۲ روز پیش</span>
                </div>
              </div>
              <p className={styles.commentText}>
                مقاله بسیار مفید و جامعی بود. ممنون از توضیحات کامل شما.
              </p>
            </div>

            <div className={styles.commentCard}>
              <div className={styles.commentHeader}>
                <div className={styles.commentAvatar}>ج</div>
                <div className={styles.commentUserInfo}>
                  <span className={styles.commentAuthor}>جواد حسینی</span>
                  <span className={styles.commentDate}>۱ روز پیش</span>
                </div>
              </div>
              <p className={styles.commentText}>
                استفاده از Context API واقعا کار را ساده‌تر کرده...
              </p>
            </div>

            <div className={styles.commentCard}>
              <div className={styles.commentHeader}>
                <div className={styles.commentAvatar}>ا</div>
                <div className={styles.commentUserInfo}>
                  <span className={styles.commentAuthor}>الهام کریمی</span>
                  <span className={styles.commentDate}>چند ساعت پیش</span>
                </div>
              </div>
              <p className={styles.commentText}>
                آیا امکان دارد مثالی از ترکیب useReducer و Context API ارائه
                دهید؟
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
