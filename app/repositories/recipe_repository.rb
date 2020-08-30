class RecipeRepository
    def search(ingredients = '', limit = 50)
        Recipe.where("ingredients::text ILIKE ALL ( array[?] )", ingredients).limit(limit)
    end
end