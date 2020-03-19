interface IngredientInterface  {
    name: string;
}

interface InstructionInterface {
    name: string;
}

interface RecipeInterface {
    title: string;
    username: string;
    description: string;
    ingredients: IngredientInterface[];
    instructions: InstructionInterface[];
}