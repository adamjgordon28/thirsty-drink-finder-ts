import React, { FunctionComponent } from "react";
import styles from "../styles/IngredientLabelRow.module.css";

import { IngredientLabelRowProps } from "../types";

const IngredientLabelRow: FunctionComponent<IngredientLabelRowProps> = ({
  color,
  label,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.colorTile}
        style={{
          backgroundColor: color,
        }}
      />
      {label}
    </div>
  );
};
export default IngredientLabelRow;
