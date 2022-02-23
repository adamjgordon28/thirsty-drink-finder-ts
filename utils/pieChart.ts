import { getNumericalOunceAmountFromMeasure } from "./units";

import { colorScale } from "../constants/colors";
import { IngredientsListElement, PieChartData } from "../types";

export const getPieChartConfig: (
  ingredientsList: IngredientsListElement[]
) => PieChartData = (ingredientsList) => {
  return {
    labels: [],
    datasets: [
      {
        data: getPieChartData(ingredientsList),
        backgroundColor: colorScale,
      },
    ],
  };
};

export const getPieChartData: (
  ingredients: IngredientsListElement[]
) => (number | null)[] = (ingredients) => {
  return ingredients.map(({ measure }) => {
    if (measure) {
      return getNumericalOunceAmountFromMeasure(measure);
    }
    return null;
  });
};

export const isPieChartDataEmpty: (data: (number | null)[]) => boolean = (
  data
) => {
  let isEmpty: boolean = true;
  data?.forEach((entry) => {
    if (entry) {
      isEmpty = false;
    }
  });
  return isEmpty;
};
