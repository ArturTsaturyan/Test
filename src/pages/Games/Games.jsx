import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCurrency, setCurrentGamesList, setProviders } from "../../redux/games/games.action";

import GameItem from "../../components/GameItem/GameItem";
import SelectWithLabel from "../../components/SelectWithLabel/SelectWithLabel";
import Button from "../../components/Button/Button";

import styles from "./Games.module.css";

export default function Games() {

  const dispatch = useDispatch();

  const currentGamesList = useSelector((state) => state.currentGamesList.currentGamesList);
  const providersList = useSelector((state) => state.providers.providers);
  const currencyList = useSelector((state) => state.currency.currency);

  const [providerState, setProviderState] = useState("");
  const [currencyState, setStateCurrency] = useState("");
  const [count, setCount] = useState(12);


  useEffect(() => {
    dispatch(setCurrentGamesList({ provider: providerState, currency: currencyState }));
    dispatch(setProviders(currencyState));
    dispatch(setCurrency(providerState));
  }, [providerState, currencyState]);


  const handleChangeProverder = (event) => {
    setProviderState(event.target.value);
  };

  const handleChangeCurrency = (event) => {
    event.preventDefault();
    setStateCurrency(event.target.value);
  };

  return (
    <div className={styles.gamesContainer}>
      <div className={styles.gamesSelects}>
        <SelectWithLabel
          handleChange={handleChangeCurrency}
          selectTitel={"Currency"}
          value={currencyState}
          selectList={currencyList ?? []}
        />
        <SelectWithLabel
          selectList={providersList ?? []}
          value={providerState}
          handleChange={handleChangeProverder}
          selectTitel={"Provider"}
        />
      </div>
      <div className={styles.gameItems}>
        {
          currentGamesList.slice(0, count).map((e, i) => (
            <div key={i} style={{ cursor: "pointer" }}>
              <GameItem title={e.title} link={e.img} />
            </div>
          ))
        }
      </div>
      <div>
        <Button onClick={() => setCount((e) => e + 12)} title="View more" />
      </div>
    </div>
  );
}
