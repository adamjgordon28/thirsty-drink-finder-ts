import React, { FunctionComponent, ReactNode } from "react";

import { Pie } from "react-chartjs-2";

import IngredientLabelRow from "./IngredientLabelRow";
import { colorScale } from "../constants/colors";
import { CANNOT_DISPLAY_GRAPH } from "../constants/messaging";
import { pieChartOptions } from "../constants/pieChart";
import styles from "../styles/IngredientsChartArea.module.css";
import { IngredientsChartAreaProps, IngredientsListElement } from "../types";
import {
  getPieChartConfig,
  getPieChartData,
  isPieChartDataEmpty,
} from "../utils/pieChart";

const IngredientsChartArea: FunctionComponent<IngredientsChartAreaProps> = ({
  ingredientsList,
}) => {
  const pieChartData: (number | null)[] = getPieChartData(ingredientsList);
  const isPieChartEmpty = isPieChartDataEmpty(pieChartData);
  const renderIngredientLabels: (
    ingredients: IngredientsListElement[]
  ) => ReactNode[] = (ingredients) => {
    return ingredients?.map(({ ingredient, measure }, index) => {
      return (
        <div key={ingredient}>
          {ingredient && measure && (
            <IngredientLabelRow
              color={colorScale[index]}
              key={`${ingredient} (${measure})`}
              label={`${ingredient} (${measure})`}
            />
          )}
        </div>
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
            <Pie
              data={getPieChartConfig(ingredientsList)}
              options={pieChartOptions}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientsChartArea;
