import React, { FunctionComponent } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Link from "next/link";

import { NO_DRINKS_MATCH_SEARCH } from "../constants/messaging";
import styles from "../styles/DrinkSearchResults.module.css";
import { Drink, DrinkSearchResultsProps } from "../types";

const DrinkSearchResults: FunctionComponent<DrinkSearchResultsProps> = ({
  currentInput,
  drinks,
}) => {
  return (
    <>
      <div>
        <List
          className={
            drinks?.length > 10
              ? styles.manyResultsContainer
              : styles.resultsContainer
          }
        >
          {!!drinks?.length &&
            drinks?.map((drink: Drink) => {
              return (
                <>
                  <Link href={`/drinks/${drink?.strDrink}`} passHref>
                    <div>
                      <ListItem key={drink?.strDrink} button>
                        <ListItemText primary={drink?.strDrink} />
                        <ArrowForwardIosIcon />
                      </ListItem>
                      <Divider />
                    </div>
                  </Link>
                </>
              );
            })}
          {!!currentInput && !drinks?.length && (
            <ListItem className={styles.noDrinksNotification}>
              <ListItemText primary={NO_DRINKS_MATCH_SEARCH} />
            </ListItem>
          )}
        </List>
      </div>
    </>
  );
};

export default DrinkSearchResults;
