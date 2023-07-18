import { useEffect } from "react";

import { NavLink, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentGamesList } from "../../redux/games/games.action";

import styles from "./Game.module.css";

export default function GameInnerPage() {
  const id = useParams();
  const dispatch = useDispatch();
  const currentGamesList = useSelector((state) => state.currentGamesList.currentGamesList);
  const currentGame = currentGamesList?.find((e) => e?.img === id?.["*"])

  useEffect(() => {
    dispatch(setCurrentGamesList());
  }, []);

  return (
    <div className={styles.gamePage}>
      <NavLink to="/" className={styles.back}>
        Back
      </NavLink>
      <div className={styles.gamePageTitel}>
        <h1>{currentGame?.title}</h1>
      </div>
    </div>
  );
}
