import styles from "./styles.module.css";
import ScreenRecorder from "../Recorder/ScreenRecorder";

const Homepage = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.app_container}>
      <div>
        <nav className={styles.navbar}>
          <h1>React Media Recorder</h1>
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </div>
      <div className={styles.main_container}>
        <ScreenRecorder />
      </div>
    </div>
  );
};

export default Homepage;
