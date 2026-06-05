import styles from "./Dashboard.module.css";
import ArtikelCard from "./ArtikelsContainer/ArtikelCard";
import { useContext } from "react";
import { ArtikelManagementContext } from "../ArtikelManagementContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { artikels, setIsUserLoggedIn } = useContext(ArtikelManagementContext);
  
  const handleExit = () =>{
    setIsUserLoggedIn(false)
  }
  return (
    <>
      <div className={styles.adminDashboard}>
        <div className={styles.dashboardHeader}>
          <h1>داشبورد ادمین</h1>
        </div>
        <div className={styles.contentArea}>
          <div className={styles.mainContent}>
            <div className={styles.articleList}>
              {artikels.map((artikel) => (
                <ArtikelCard key={artikel.id} {...artikel} />
              ))}
            </div>
          </div>
          <div className={styles.sidebar}>
            <h2>منوها</h2>
            <ul>
              <li>
                <Link to="/add_artikel">افزودن مقاله جدید</Link>
              </li>
              <li>
                <Link to="/dashboard">داشبورد</Link>
              </li>
              <li>
                <Link to="/artikels">مقالات</Link>
              </li>
              <li>
                <Link to="/settings">تنظیمات</Link>
              </li>
              <li>
                <Link to="/" onClick={handleExit}>خروج</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
