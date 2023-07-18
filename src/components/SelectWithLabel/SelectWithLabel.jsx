import { Select, FormControl, MenuItem, InputLabel } from '@mui/material';

import styles from './SelectWithLabel.module.css';

export default function SelectWithLabel({ value, handleChange, selectList = [], selectTitel }) {

  const defaultDescription = selectTitel === "Currency" ? "All Currencies" : "All Providers"

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small">{defaultDescription}</InputLabel>
      <Select
        className={styles.select}
        value={value}
        label={selectTitel}
        onChange={handleChange}
      >
        {selectList?.map((elem, index) => (
          <MenuItem className={styles.selectItem} key={index} value={elem}>{elem}</MenuItem>
        ))
        }
        <MenuItem sx={{ color: "red" }} value={""}>{defaultDescription}</MenuItem>
      </Select>
    </FormControl>
  );
}