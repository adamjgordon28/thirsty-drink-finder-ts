import { unitToOunceConverter } from "../constants/units";
import { Drink, IngredientsListElement } from "../types";

export const getIngredientsList: (drink: Drink) => IngredientsListElement[] = (
  drink
) => {
  const ingredientsList: IngredientsListElement[] = [
    {
      ingredient: drink?.strIngredient1?.trim(),
      measure: drink?.strMeasure1?.trim(),
    },
    {
      ingredient: drink?.strIngredient2?.trim(),
      measure: drink?.strMeasure2?.trim(),
    },
    {
      ingredient: drink?.strIngredient3?.trim(),
      measure: drink?.strMeasure3?.trim(),
    },
    {
      ingredient: drink?.strIngredient4?.trim(),
      measure: drink?.strMeasure4?.trim(),
    },
    {
      ingredient: drink?.strIngredient5?.trim(),
      measure: drink?.strMeasure5?.trim(),
    },
    {
      ingredient: drink?.strIngredient6?.trim(),
      measure: drink?.strMeasure6?.trim(),
    },
    {
      ingredient: drink?.strIngredient7?.trim(),
      measure: drink?.strMeasure7?.trim(),
    },
    {
      ingredient: drink?.strIngredient8?.trim(),
      measure: drink?.strMeasure8?.trim(),
    },
    {
      ingredient: drink?.strIngredient9?.trim(),
      measure: drink?.strMeasure9?.trim(),
    },
    {
      ingredient: drink?.strIngredient10?.trim(),
      measure: drink?.strMeasure10?.trim(),
    },
    {
      ingredient: drink?.strIngredient11?.trim(),
      measure: drink?.strMeasure11?.trim(),
    },
    {
      ingredient: drink?.strIngredient12?.trim(),
      measure: drink?.strMeasure12?.trim(),
    },
    {
      ingredient: drink?.strIngredient13?.trim(),
      measure: drink?.strMeasure13?.trim(),
    },
    {
      ingredient: drink?.strIngredient14?.trim(),
      measure: drink?.strMeasure14?.trim(),
    },
    {
      ingredient: drink?.strIngredient15?.trim(),
      measure: drink?.strMeasure15?.trim(),
    },
  ];

  return ingredientsList;
};

export const getNumericalOunceAmountFromMeasure: (
  measure: string
) => number | null = (measure) => {
  let amount: number = 0;
  const measureArticles: string[] = measure.split(" ");
  // checking if first value of measure string is numerical. If not, no need to continue
  if (measureArticles[0] && isNaN(parseFloat(measureArticles[0]))) {
    return null;
  }
  amount = eval(measureArticles[0]);
  // checking if second value of measure string is numerical.
  // If so, is likely a fraction and should be evaluated,
  // if not, should determine if it is a convertable unit
  if (measureArticles[1] && isNaN(parseFloat(measureArticles[1]))) {
    // is not numerical so should be checked as convertible to ounces
    const conversionCoefficient: number | undefined =
      unitToOunceConverter[measureArticles[1]?.toLowerCase()];
    if (conversionCoefficient) {
      // is a convertable unit so should convert to ounces
      return amount * conversionCoefficient;
    }
    // is not a convertible unit so no need to capture as numerical data
    return null;
  } else {
    amount += eval(measureArticles[1]);
    const conversionCoefficient: number | undefined =
      unitToOunceConverter[measureArticles[2]?.toLowerCase()];
    if (conversionCoefficient) {
      // is a convertable unit so should convert to ounces
      return amount * conversionCoefficient;
    }
    // is not a convertible unit so no need to capture as numerical data
    return null;
  }
};
