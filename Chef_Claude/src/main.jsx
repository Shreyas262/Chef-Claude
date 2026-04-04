import React from "react";
import ClaudeRecipe from "./claudeRecipe";
import IngredientsList from "./ingredientsList";
import { getRecipeFromMistral } from "./ai";

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState(false)

    async function getRecipe() {
        const recipeMD = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMD)
    }
    
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main className="main">
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    aria-label="Add Ingredients Input"
                    type="text"
                    placeholder="e.g. Spinach"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            
            {
                ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}