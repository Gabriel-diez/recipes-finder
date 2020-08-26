
class Api::V1::RecipeController < ApplicationController
    def search
        ingredients = []
        limit = 30
        if params[:ingredients]
            ingredients = params[:ingredients].split(',')
        end

        formatted_ingredients = ingredients.map {|val| "%#{val}%" }
        r = Recipe.where("ingredients::text ILIKE ALL ( array[?] )", formatted_ingredients).limit(limit)

        render json: r
    end
end