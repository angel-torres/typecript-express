interface IngredientInterface  {
    name: string;
}

interface InstructionInterface {
    description: string;
}

interface RecipeInterface {
    title: string;
    username: string;
    description: string;
    thumbnailURL: string;
    ingredients: IngredientInterface[];
    instructions: InstructionInterface[];
}