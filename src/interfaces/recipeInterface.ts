import IngredientiInterface from './ingredientInterface';

interface RecipeInterface {
    title: string;
    description: string;
    ingredients: IngredientiInterface[];
};

export default RecipeInterface;