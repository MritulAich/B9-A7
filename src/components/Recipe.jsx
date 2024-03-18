import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe, handleWannaCook }) => {
    const { recipe_image, recipe_name, short_description, calories, preparing_time, ingredients } = recipe;
    
    const toasting = ()=>{
        toast('This is already exist')
      }
    return (

        <div className="card border-2 p-6 space-y-3">
            <img src={recipe_image} className="rounded-xl w-80 h-52" />
            <h2 className="card-title">{recipe_name}</h2>
            <p>{short_description}</p>
            <hr />
            <h3 className="text-lg font-medium">Ingredients: </h3>
            <ul>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
            </ul>
            <hr />
            <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-1">
                    <img src="https://i.ibb.co/PDJF9PW/time.png" /><p>{preparing_time}</p>
                </div>
                <div className="flex flex-row gap-1">
                    <img src="https://i.ibb.co/dDNY2DV/calories.png" /><p>{calories}</p>
                </div>
            </div>
            <button onClick={()=> handleWannaCook(recipe)} className="btn btn-success font-medium rounded-3xl">Want to Cook</button>
            <ToastContainer />
        </div>
    );
};


Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWannaCook: PropTypes.func
}

export default Recipe;