import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import PropTypes from 'prop-types';

const Recipes = () => {

    const [cookNum, setCookNum] = useState([]);

    const handleWannaCook = recipe => {
        const newCookNum = [...cookNum, recipe];
        setCookNum(newCookNum)
    }
 

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className="flex flex-row mb-24">
            <div className="grid grid-cols-2 ml-36 gap-6 ">
                {
                    recipes.map((recipe, idx) => <Recipe
                        key={idx}
                        recipe={recipe}
                        handleWannaCook={handleWannaCook}
                    ></Recipe>)
                }
            </div>
            <div className="border-2 rounded-2xl text-center p-6 ml-6 space-y-4 mr-36">
                <h3 className="font-semibold text-2xl">Want to cook: {cookNum.length}</h3>
                <hr />
                <div className="flex flex-row gap-24">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <div>
                    {
                        cookNum.map((recipe, idx) =>
                            <div className="flex flex-row gap-8 space-y-5 items-center justify-center text-center bg-slate-100"
                            key={idx}>
                            <p>{recipe.recipe_name}</p>
                            <p>{recipe.preparing_time}</p>
                            <p>{recipe.calories}</p>
                            <button className="btn btn-success rounded-3xl">Preparing</button>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

Recipes.propTypes = {
    handleWannaCook: PropTypes.func
}
export default Recipes;