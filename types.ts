export type Drink = {
  dateModified: string | null;
  idDrink: string;
  strAlcoholic: string | null;
  strCategory: string | null;
  strCreativeCommonsConfirmed: string | null;
  strDrink: string | null;
  strDrinkAlternate: string | null;
  strDrinkThumb: string | null;
  strGlass: string | null;
  strIBA: string | null;
  strImageAttribution: string | null;
  strImageSource: string | null;
  strIngredient1?: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strInstructions: string | null;
  strInstructionsDE: string | null;
  strInstructionsES: string | null;
  strInstructionsFR: string | null;
  "strInstructionsZH-HANS": string | null;
  "strInstructionsZH-HANT": string | null;
  strInstructionsIT: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strTags: string | null;
  strVideo: string | null;
};

export type DrinkPageProps = {
  drink: Drink;
};

export type DrinkSearchResultProps = {
  drink: Drink;
};

export type DrinkSearchResultsProps = {
  currentInput?: string | undefined;
  drinks: Drink[];
};

export type IngredientLabelRowProps = {
  color: string;
  label: string;
};

export type IngredientsListElement = {
  ingredient: string | undefined;
  measure: string | undefined;
};

export type UnitToOunceConverter = {
  [key: string]: number | undefined;
  cl: number;
  cup: number;
  cups: number;
  dl: number;
  gal: number;
  gallon: number;
  l: number;
  ml: number;
  oz: number;
  part: number;
  parts: number;
  pint: number;
  shot: number;
  shots: number;
  tblsp: number;
  tbsp: number;
  tsp: number;
};
