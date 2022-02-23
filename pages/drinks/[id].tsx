import React, { FunctionComponent, ReactNode } from "react";

import { Drink, DrinkPageProps, IngredientsListElement } from "../../types";

import { useRouter } from "next/router";

import { GetServerSideProps } from "next";
import Link from "next/link";

import Head from "next/head";
import Image from "next/image";

import styles from "../../styles/DrinkPage.module.css";

import "chart.js/auto";

import { Pie } from "react-chartjs-2";
import { colorScale } from "../../constants/colors";
import IngredientLabelRow from "../../components/IngredientLabelRow";
import {
  getIngredientsList,
  getPieChartData,
  isPieChartDataEmpty,
} from "../../utils/units";

import ArrowBack from "@mui/icons-material/ArrowBack";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const pieChartOptions = {
  events: [],
  plugins: {
    legend: {
      display: false,
    },
  },
};

const DrinkPage: FunctionComponent<DrinkPageProps> = ({ drink }) => {
  const renderIngredientLabels: (
    ingredients: IngredientsListElement[]
  ) => ReactNode[] = (ingredients) => {
    return ingredients?.map(({ ingredient, measure }, index) => {
      return (
        <>
          {ingredient && measure && (
            <IngredientLabelRow
              label={`${ingredient} (${measure})`}
              color={colorScale[index]}
            />
          )}
        </>
      );
    });
  };

  const ingredientsList: IngredientsListElement[] = getIngredientsList(drink);

  const pieChartData: (number | null)[] = getPieChartData(ingredientsList);
  const data = {
    labels: [],
    datasets: [
      {
        data: getPieChartData(ingredientsList),
        backgroundColor: colorScale,
        hoverBackgroundColor: colorScale,
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{drink?.strDrink}</title>
      </Head>
      <Link href="/" passHref>
        <div className={styles.backButton}>
          <ArrowBack
            style={{
              color: "black",
              height: 40,
              width: 80,
              margin: "16px 0 0 8px",
              // backgroundColor: "rgb(239, 240, 241)",
              // color: "white",
            }}
          />
        </div>
      </Link>
      <div className={styles.pageContainer}>
        <div className={styles.drinkContentContainer}>
          <div className={styles.thumbnailAndNameContainer}>
            <Image
              className={styles.thumbnail}
              src={`${drink?.strDrinkThumb}/preview`}
              width={250}
              height={250}
              alt=""
            />
            <div className={styles.nameContainer}>{drink?.strDrink}</div>
          </div>

          <div className={styles.ingredientsAndInstructionsAndChartContainer}>
            {/* <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 16, textAlign: "center", overflowY: "auto" }}
                >
                  {drink?.strInstructions}
                </Typography>
              </CardContent>
            </Card> */}

            <div className={styles.instructionsContainer}>
              <p>{drink?.strInstructions}</p>
            </div>

            <div className={styles.ingredientsAndChartContainer}>
              <div className={styles.ingredientsContainer}>
                {renderIngredientLabels(ingredientsList)}
              </div>
              <div className={styles.chartContainer}>
                {isPieChartDataEmpty(pieChartData) ? (
                  <div className={styles.cannotDisplayChart}>
                    Cannot display graph for this drink
                  </div>
                ) : (
                  <div className={styles.chart}>
                    <Pie data={data} options={pieChartOptions} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrinkPage;

export const getServerSideProps: GetServerSideProps = async ({
  params = { id: "" },
}) => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.id}`
  );
  const { drinks } = await res.json();
  const drink: Drink = drinks?.[0];
  return {
    props: { drink },
  };

  //   console.log({ req });

  //   if (req) {
  //     const data = await req.json();

  //     const { drinks } = data;

  //     const drink = drinks?.[0];
  //     return {
  //       props: { drink },
  //     };
  //   }
  //   return {};
};

// export async function getStaticPaths() {
//   const req = await fetch;
// }
