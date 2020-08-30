class Api::V1::RecipeController < ApplicationController
    def search
        limit = 30
        recipes = UseCase::Recipe::Search.new(repository).call(search_params, limit)
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