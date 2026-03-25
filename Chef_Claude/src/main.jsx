export default function Main() {

    const ingredients = [];
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");
        if (newIngredient) {
            ingredients.push(newIngredient);
        }
    }

    return (
        <main>
            <form className="add-ingredient-form" action="" onSubmit={handleSubmit}>
                <input
                    aria-label="Add Ingredients Input"
                    type="text"
                    placeholder="e.g. Spinach"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
        </main>
    );
}
