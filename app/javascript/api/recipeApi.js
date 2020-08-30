import Api from './api';

const RecipeApi = {
    baseUrl: () => 'api/v1/recipe',

    async search(ingredients) {
        const url = `${this.baseUrl()}/search?ingredients=${ingredients.toString()}`;
        return Api.get(url);
    },
}
  
export default RecipeApi;