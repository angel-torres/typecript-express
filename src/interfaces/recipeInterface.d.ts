interface StepsInterface {
    name: string;
}

interface RecipeInterface {
    title: string;
    username: string;
    description: string;
    ingredients: IngredientInterface[];
    steps: StepsInterface[];
}
