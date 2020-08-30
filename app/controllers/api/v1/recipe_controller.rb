class Api::V1::RecipeController < ApplicationController
    def search
        ingredients = []
        limit = 30
        if search_params[:ingredients]
            ingredients = search_params[:ingredients].split(',')
        end

        formatted_ingredients = ingredients.map {|val| "%#{val}%" }
        recipes = repository.search(formatted_ingredients, limit)

        render json: recipes
    end

    private

    def search_params
        params.permit(:ingredients)
    end

    def repository
        @repository ||= RecipeRepository.new
    end
end