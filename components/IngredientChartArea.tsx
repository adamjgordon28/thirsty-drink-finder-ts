import React, { FunctionComponent, ReactNode } from "react";

import { Pie } from "react-chartjs-2";

import IngredientLabelRow from "../components/IngredientLabelRow";
import { colorScale } from "../constants/colors";
import { CANNOT_DISPLAY_GRAPH } from "../constants/messaging";
import styles from "../styles/IngredientChartArea.module.css";
import { IngredientChartAreaProps, IngredientsListElement } from "../types";
import { getPieChartData } from "../utils/units";

const IngredientChartArea: FunctionComponent<IngredientChartAreaProps> = ({
  ingredientsList,
  isPieChartEmpty,
}) => {
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

  const pieChartOptions = {
    events: [],
    plugins: {
      legend: {
        display: false,
      },
    },
  };

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
              key={`${ingredient} (${measure})`}
            />
          )}
        </>
      );
    });
  };
  return (
    <div className={styles.ingredientsAndChartContainer}>
      <div className={styles.ingredientsContainer}>
        {renderIngredientLabels(ingredientsList)}
      </div>
      <div>
        {isPieChartEmpty ? (
          <div className={styles.cannotDisplayChart}>
            {CANNOT_DISPLAY_GRAPH}
          </div>
        ) : (
          <div className={styles.chart}>
            <Pie data={data} options={pieChartOptions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientChartArea;
