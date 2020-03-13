import IngredientiInterface from './ingredientInterface';

interface StepsInterface {
    name: string;
}

interface RecipeInterface {
    title: string;
    username: string;
    description: string;
    ingredients: IngredientiInterface[];
    steps: StepsInterface[];
};

export default RecipeInterface;