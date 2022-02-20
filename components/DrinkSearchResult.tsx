import React, { FunctionComponent } from "react";
import Link from "next/link";
import styles from "../styles/DrinkSearchResult.module.css";
import { DrinkSearchResultProps } from "../types";

const DrinkSearchResult: FunctionComponent<DrinkSearchResultProps> = ({
  drink,
}) => {
  return (
    <Link href={`/drinks/${drink?.strDrink}`} passHref>
      <div className={styles.result}>{drink?.strDrink}</div>
    </Link>
  );
};

export default DrinkSearchResult;
