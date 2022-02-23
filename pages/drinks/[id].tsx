import React, { FunctionComponent } from "react";

import ArrowBack from "@mui/icons-material/ArrowBack";

import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import IngredientsChartArea from "../../components/IngredientsChartArea";
import { THIRSTY } from "../../constants/messaging";
import { BASE_API_URL } from "../../constants/urls";
import styles from "../../styles/DrinkPage.module.css";
import { Drink, DrinkPageProps, IngredientsListElement } from "../../types";
import { getIngredientsList } from "../../utils/units";

import "chart.js/auto";

const DrinkPage: FunctionComponent<DrinkPageProps> = ({ drink }) => {
  const ingredientsList: IngredientsListElement[] = getIngredientsList(drink);
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>
          {THIRSTY}
          {drink?.strDrink}
        </title>
      </Head>
      <div className={styles.arrowContainer}>
        <Link href="/" passHref>
          <ArrowBack />
        </Link>
      </div>
      <div className={styles.pageContainer}>
        <div className={styles.drinkContentContainer}>
          <div className={styles.thumbnailAndNameContainer}>
            <Image
              src={`${drink?.strDrinkThumb}/preview`}
              alt=""
              className={styles.thumbnail}
              width={250}
              height={250}
            />
            <div className={styles.nameContainer}>{drink?.strDrink}</div>
          </div>
          <div className={styles.ingredientsAndInstructionsAndChartContainer}>
            <div className={styles.instructionsContainer}>
              {drink?.strInstructions}
            </div>
            <IngredientsChartArea ingredientsList={ingredientsList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkPage;

export const getServerSideProps: GetServerSideProps = async ({
  params = { id: "" },
}) => {
  const res = await fetch(
    `${BASE_API_URL}/api/json/v1/1/search.php?s=${params.id}`
  );
  const { drinks } = await res.json();
  const drink: Drink = drinks?.[0];
  return {
    props: { drink },
  };
};
