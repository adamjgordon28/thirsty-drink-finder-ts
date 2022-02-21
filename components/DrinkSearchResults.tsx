import React, { FunctionComponent } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import styles from "../styles/DrinkSearchResult.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Drink, DrinkSearchResultsProps } from "../types";

const DrinkSearchResults: FunctionComponent<DrinkSearchResultsProps> = ({
  currentInput,
  drinks,
}) => {
  return (
    <>
      <div>
        <List
          style={{
            maxHeight: "51.5vh",
            overflow: "auto",
          }}
        >
          {/* {!!drinks?.length && (
            <>
              <ListItem>
                <ListItemText primary={`${drinks?.length} Results`} />
              </ListItem>
              <Divider />
            </>
          )} */}
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
            <ListItem style={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  "We're sorry, there are no drinks that match that search"
                }
              />
            </ListItem>
          )}
        </List>
        {/* {drinks?.length > 10 && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            10
          </div>
        )} */}
      </div>
    </>
  );
};

export default DrinkSearchResults;
