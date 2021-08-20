import * as axios from 'axios';

const cocktailsListUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

const cocktailDetailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export function getCocktails(callback) {
  axios
    .get(cocktailsListUrl)
    .then((response) => callback(response.data.drinks));
}

export function getCocktailById(id, callback) {
  axios
    .get(`${cocktailDetailUrl}${id}`)
    .then((response) => callback(response.data.drinks?.[0]));
}
