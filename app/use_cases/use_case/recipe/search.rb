module UseCase
    module Recipe
        class Search < UseCase::Base
            def call(params, limit = 50)
                ingredients = []
                if params[:ingredients]
                    ingredients = params[:ingredients].split(',')
                end

                formatted_ingredients = ingredients.map {|val| "%#{val}%" }
                recipes = repository.search(formatted_ingredients, limit)
            end
        end
    end
end