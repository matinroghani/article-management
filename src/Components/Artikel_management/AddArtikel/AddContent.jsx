import { useContext, useState } from "react";
import styles from "./AddArtikel.module.css";
import { v4 as uuid } from "uuid";
import { ArtikelManagementContext } from "../ArtikelManagementContext";
import { Link } from "react-router-dom";

export default function AddContent({setIsArtikelAdded}) {
  const { addArtikel } = useContext(ArtikelManagementContext);

  const [inputsData, setInputsData] = useState({
    title: "",
    summary: "",
    content: "",
  });

  function handleTextInputOnChange(e) {
    const { name, value } = e.target;
    setInputsData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsArtikelAdded(false)

  }

  function handlOnSubmit(e) {
    e.preventDefault();
    const newArtikelId = uuid();

    const newArtikel = {
      id: newArtikelId,
      image: inputsData.image,
      title: inputsData.title,
      summary: inputsData.summary,
      content: inputsData.content,
    };

    addArtikel(newArtikel)

    setInputsData({
      title: "",
      summary: "",
      content: "",
    });

    setIsArtikelAdded(true)

  }

  return (
    <>
      <div className={styles.addArticleBox}>
        <h2>افزودن مقاله جدید</h2>
        <form id="addArticleForm" onSubmit={handlOnSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="articleTitle"
              name="title"
              required
              onChange={handleTextInputOnChange}
              value={inputsData.title}
            />
            <label htmlFor="articleTitle">عنوان مقاله</label>
          </div>
          <div className={styles.inputGroup}>
            <textarea
              id="articleSummary"
              name="summary"
              required
              rows="3"
              onChange={handleTextInputOnChange}
              value={inputsData.summary}
            ></textarea>
            <label htmlFor="articleSummary">
              خلاصه مقاله (برای نمایش در کارت‌ها)
            </label>
          </div>
          <div className={styles.inputGroup}>
            <textarea
              id="articleDescription"
              name="content"
              required
              rows="8"
              onChange={handleTextInputOnChange}
              value={inputsData.content}
            ></textarea>
            <label htmlFor="articleDescription">توضیحات کامل مقاله</label>
          </div>
          <button type="submit">افزودن مقاله</button>

          <Link className={styles.backToDashBoard} to="/dashboard">
          بازگشت به داشبورد
          </Link>
        </form>
      </div>
    </>
  );
}
