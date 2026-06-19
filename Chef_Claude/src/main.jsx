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

    const recipeSection = React.createRef(null)
    React.useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

    return (
        <main className="main">
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    aria-label="Add Ingredients Input"
                    type="text"
                    placeholder="Add atleast 3-ingredients & 1-ingredient at a time, e.g. Potato "
                    name="ingredient"
                />
                <button className="add-ingredients-btn" id="addIngredientsBtn">Add Ingredient</button>
            </form>
            
            {
                ingredients.length > 0 && <IngredientsList ref={recipeSection} ingredients={ingredients} getRecipe={getRecipe} />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}