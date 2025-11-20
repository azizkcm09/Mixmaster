import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await axios.get(`${singleCocktailUrl}${id}`);
  return { drink: response.data.drinks[0] };
};
const Cocktail = () => {
  return <div>Coctail</div>;
};

export default Cocktail;
