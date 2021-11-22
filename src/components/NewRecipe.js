import {useState} from "react";

function NewRecipe() {
    const [title, setTitle] = useState("Titre de la recette")
    const [ingredients, setIngredients] = useState([])

    function handleBlur(e) {
        const ingredientAlreadySelected = ingredients.find((ingr) => ingr.name === e.target.value)
        if (ingredientAlreadySelected)
            alert("ingrédient déjà ajouté")
    }

    function handleChange() {
    }

    return (
        <div>
            <label htmlFor="title">Titre de la recette</label>
            <input type="text" id="recipeTitle" name="recipeTitle" value={title} onChange={(event => setTitle(event.target.value))} />
            <input type="text" id="ingr1" name="ingredient1" value={title} onBlur={handleBlur} onChange={handleChange} />
            <input type="text" id="recipeTitle" name="recipeTitle" value={title} onChange={(event => setTitle(event.target.value))} />
        </div>
    )
}

export default NewRecipe