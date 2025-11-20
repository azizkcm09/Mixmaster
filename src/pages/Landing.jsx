import axios from "axios";
import { useLoaderData } from "react-router-dom";

const coctailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const loader = async () => {
  const searchTerm = "margarita";
  const response = await axios.get(`${coctailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return (
    <div>
      <h1>Landing page</h1>
    </div>
  );
};

export default Landing;
