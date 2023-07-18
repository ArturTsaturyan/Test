
import { useNavigate } from "react-router-dom";

import styles from "./GameItem.module.css";

export default function GameItem({ title, link }) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(link)
  }
  return (
    <div className={styles.GameItem}>
      <div onClick={handleClick}>
        {<img
          src={`https://cdn2.softswiss.net/i/s2/${link}.png`}
          alt={`https://cdn2.softswiss.net/i/s2/${link}.png`}
          className={styles.GameItemImage}
        />}
      </div>
      <div>
        <p className={styles.GameItemTitle}>{title}</p>
      </div>
    </div>
  );
}
